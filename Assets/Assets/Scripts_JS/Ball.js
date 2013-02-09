var mainGameScript : MainGame;

var particles_splash : GameObject;

function Awake()
{
	rigidbody.AddForce(5,5,0, ForceMode.Impulse);
	InvokeRepeating("IncreaseBallVelocity",2,2);
}

function Update()
{
	if(transform.position.y < -2)
	{ 
		mainGameScript.GameOver();
		//Application.LoadLevel("menu");
	}
}

function IncreaseBallVelocity()
{
	rigidbody.velocity *= 1.05;
	Debug.Log("velocity: " + rigidbody.velocity);
}

function OnCollisionEnter(collision:Collision)
{
	Instantiate(particles_splash, transform.position, transform.rotation);
}