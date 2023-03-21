import { useLoaderData } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import '../../src/index.css';
import '../styles/PhotoList.css';


export default function PhotoList() {
    const {Photos}=useLoaderData();
    console.log(Photos);

return (
    <>
    <div id='container'>
    {/* <div id="container">
        {
        Photos.map((item) => 
            <div key={item.id}>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <img src={`data:image/jpg;base64,${item.content}`} alt={item.title} />
            </div>
                )
        }
    </div> */}
        <Dashboard />
    </div>
    </>
    )        
};
