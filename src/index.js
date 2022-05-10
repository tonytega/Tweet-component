
import ReactDOM from 'react-dom/client';
import './index.css';


const address = {
    fullname : 'Full Name',
    address : '123 fake street',
    city : 'Boston, MA',
    postall: 2118,
    
  }

function AddressLabel({address_prop}){
  return(
    <div>
      <div>{address_prop.fullname}</div>
      <div>{address_prop.address}</div>
      <div>
        <span>{address_prop.city}</span>
        <span className='padding'>0{address.postall}</span>
      </div>
    </div>
  )

}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AddressLabel address_prop={address}/>
);


