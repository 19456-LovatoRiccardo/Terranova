import "./Register.css"

function RegisterOptions() {
  return (
    <>
      <div class="wrapper">
        <form>
          <h1>Registrazione</h1>
          <br></br>
            <div class="radio-group">
                <h2>Scegli il tipo di account:</h2>
                <br></br>
                <button type="button" class="btn">Privato</button>
                <br></br>
                <button type="button" class="btn">Azienda</button>
                <br></br>
            </div>

          <div class="register-link">
            <p>Hai gia' un account Tynamo? <a href="#"> Accedi qui.</a></p>
          </div>
        </form>
      </div>
    </>
  )
}

export default RegisterOptions