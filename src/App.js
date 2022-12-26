
import { BlobProvider } from '@react-pdf/renderer';


import './App.css';
import Pdf1 from './Components/Pdf1';
import Pdf2 from './Components/Pdf2';
import Pdf3 from './Components/Pdf3';
import Pdf4 from './Components/Pdf4';





function App() {
  return (
 <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-around', margin:'18rem'}}>

  {/* Pdf1 */}
    <BlobProvider document={<Pdf1/>}>
            {({ loading, url }) =>
              loading ? (
                <button> Loading document... </button>
              ) : (
                <a href={url} target="_blank">
                  <button style={{backgroundColor:'#1D7874', width:'10rem', height:'8rem', cursor:"pointer", borderRadius:'10px', boxShadow:'6px 7px 7px 2px grey'}} > PDF1 </button>
                </a>
              )
            }
          </BlobProvider>
            {/* Pdf2 */}
    <BlobProvider document={<Pdf2/>}>
            {({ loading, url }) =>
              loading ? (
                <button> Loading document... </button>
              ) : (
                <a href={url} target="_blank">
                  <button style={{backgroundColor:'#A9E31A',width:'10rem', height:'8rem', cursor:"pointer",borderRadius:'10px', boxShadow:'6px 7px 7px 2px grey'}} > PDF2 </button>
                </a>
              )
            }
          </BlobProvider>
          {/* Pdf3 */}
          <BlobProvider document={<Pdf3/>}>
            {({ loading, url }) =>
              loading ? (
                <button> Loading document... </button>
              ) : (
                <a href={url} target="_blank">
                  <button style={{backgroundColor:'#2686E5', width:'10rem', height:'8rem', cursor:"pointer", borderRadius:'10px', boxShadow:'6px 7px 7px 2px grey' }} > PDF3 </button>
                </a>
              )
            }
          </BlobProvider>
            {/* Pdf4 */}
            <BlobProvider document={<Pdf4/>}>
            {({ loading, url }) =>
              loading ? (
                <button> Loading document... </button>
              ) : (
                <a href={url} target="_blank">
                  <button style={{backgroundColor:'#DF42AA',width:'10rem', height:'8rem', cursor:"pointer",borderRadius:'10px', boxShadow:'6px 7px 7px 2px grey'}} > PDF4 </button>
                </a>
              )
            }
          </BlobProvider>
 </div>
  );
}

export default App;
