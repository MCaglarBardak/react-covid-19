import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [veri, setVeri] = useState();
  const [tarih, setTarih] = useState();

  useEffect(() => {

    axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
      .then(cevap => setVeri(cevap.data[tarih]))
      .catch(err => console.log(err))

  }, [veri, tarih])


  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto mt-4">
            <h2 className="text-center text-white display-3 mt-5">Türkiye Covit-19 Arama Motoru</h2>
            <input type="text" placeholder="GG/AA/YY" className="form-control" onChange={(e) => setTarih(e.target.value)}>
            </input>
            <table class="table">
              <thead>
                <tr className="text-white">
                  <th scope="col">#####</th>
                  <th scope="col">Test Sayısı</th>
                  <th scope="col">Vaka Sayısı</th>
                  <th scope="col">Hasta Sayısı</th>
                </tr>
              </thead>
              <tbody className="text-white">
                <tr className={veri === undefined ? "bg-warning" : "bg-primary"}>
                  <th scope="row">1</th>
                  <td>{veri === undefined ? "Veri Beklenyor" : veri.totalTests}</td>
                  <td>{veri === undefined ? "Veri Beklenyor" : veri.cases}</td>
                  <td>{veri === undefined ? "Veri Beklenyor" : veri.totalPatients}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
