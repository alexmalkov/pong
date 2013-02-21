var mainGameScript : MainGame;

function OnTriggerEnter (collision : Collider)
{
	if (collision.transform.name == "Ball")
	{
		mainGameScript.AddScoreForBonusArea();
	}

}