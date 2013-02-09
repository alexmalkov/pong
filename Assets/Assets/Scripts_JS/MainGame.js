var score3DText : TextMesh;
private var score : int = 0;

function Awake()
{
	InvokeRepeating("UpdateScore", 0.05, 0.05);
}

function UpdateScore()
{
	score += 1;
	score3DText.text = "Score: " + score.ToString();
}

function GameOver()
{
	if(score > PlayerPrefs.GetInt("highScore"))
	{
		PlayerPrefs.SetInt("highScore", score);
	}
	Application.LoadLevel("menu");
}