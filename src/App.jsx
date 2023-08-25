import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {

  var v1 = 0

    const valores = fetch('https://opentdb.com/api.php?amount=30&category=15').then(res=>{
    res.json().then(bacon=>{

      console.log(bacon.results)


        mostraresults(bacon);

        });
        
}).catch(erro=>{
    console.log(erro+" erro na requisição")
});
  


function mostraresults(bacon){
    const categoria=document.querySelector('#categoria');
    categoria.textContent="Categoria: "+ bacon.results.category;  

    const correct_answer=document.querySelector('#correct_answer');
    correct_answer.textContent="Resposta correta: "+ bacon.correct_answer;
}


  return (
    <>
     <Header />
     <section>
            <h2>Dados da API</h2>
            <p><span id="categoria"></span></p>
            <p><span id="correct_answer"></span></p>
        </section>
     <Footer />
    </>
  )
}

export default App
