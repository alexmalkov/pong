private var ps : ParticleSystem;

////////////////////////////////////////////////////////////////

function Start () {

     ps = GetComponent(ParticleSystem);
}

function Update () {

if(ps)
{
    if(ps != null&&ps.ParticleCount==0)
    {
       Destroy(this.gameObject);
    }
}
}