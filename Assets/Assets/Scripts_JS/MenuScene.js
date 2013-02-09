private var ray : Ray;
private var rayCastHit : RaycastHit;

var highScore3DText : TextMesh;

function Awake()
{
	highScore3DText.text = "High Score: " + PlayerPrefs.GetInt("highScore").ToString();
}

function Update()
{
	if(Input.GetMouseButtonDown(0))
	{
		ray = Camera.main.ScreenPointToRay (Input.mousePosition);
		
		if(Physics.Raycast (ray, rayCastHit))
		{
			if(rayCastHit.transform.name == "playButton")
			{
				Application.LoadLevel("mainGame");
			}
		}
	}

}