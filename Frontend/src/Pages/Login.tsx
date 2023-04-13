
import { useState } from 'react'
import {  } from 'react-router-dom';
import GreenWave2 from '../images/GreenWave2.jpg'
import GlobeImage from '../images/GlobeImage.png'
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login (){

    

    const backgroundImageStyle = {
        backgroundImage: `url("${GreenWave2}")`,
        backgroundSize: 'cover', 

      };

   
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [formError, setFormError] = useState('')
    const [checkBoxChecked, setCheckBoxChecked] = useState(false);


    const handleCheckBoxChange = (e:any) => {
            setCheckBoxChecked(e.target.checked);
          };


    const handleSubmit = (e: any) => {
        console.log(formError)
        e.preventDefault()
        if ( !Email || !Password ) {
          toast.error('Login unsuccessful!', {
            position: "top-center",
            autoClose: 1000
          })
          setFormError('Please fill in all fields.')
        } else if (!checkBoxChecked) {
          toast.error('Login unsuccessful!', {
            position: "top-center",
            autoClose: 1000
          })
          setFormError('Please accept the terms of use and privacy policy.')
        }else {
          setFormError('')
          
          toast.success('Login successful!', {
            position: "top-center",
            autoClose: 1000,
              onClose: () => {
                  window.location.href = "/Home";// Navigue vers la prochaine page ici
              }})
        
          console.log("Formulaire envoyé");
  
        }
      
      }
      
    return (


<div className = "h-screen py-40" style={backgroundImageStyle}>
    <div className = "container mx-auto">
        <div className = "flex flex-col md:flex-row lg:flex-row w-9/12 md:w-11/12 lg:w-8/12 bg-green-50 rounded-xl mx-auto overflow-hidden" style={{ boxShadow: "10px 10px 20px #888888" }}>
            <div className = "w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center">
            <img src={GlobeImage}></img>
            </div>

           <div className = "w-full lg:w-1/2 py-10 px-12">
            <h2 className = "text-3xl mb-4 font-bold text-green-800">Log In</h2>

                
            <form action="" onSubmit={handleSubmit}>
                
                <div className="mt-5">
                    <input type="email" placeholder="Email" name="Email" onChange={e => setEmail(e.target.value)} className="border border-gray-400 py-1 px-2 w-full" />
                </div>
                <div className="mt-5">
                    <input type="password" placeholder="Password" name="Password" onChange={e => setPassword(e.target.value)} className="border border-gray-400 py-1 px-2 w-full" />
                    {formError && <p>{formError}</p>}
                </div>
                <div className="mt-5">
                   <input type="checkbox" name="checkbox" onChange={handleCheckBoxChange} className="border border-gray-400" />
                   <div className = "text-green-900"><span> I accept the <a href="#" className="font-semibold"> Terms of Use</a> & <a href="#" className=" font-semibold">Privacy Policy</a></span></div>
                </div>
                <div className="mt-5">
                <button type="submit" className="bg-white hover:bg-green-700 text-green-600 hover:text-white font-bold py-2 px-4 rounded border-2 border-green-600 mr-4">Log In</button>
                </div>
                <div>
                <div className = "text-green-900 pt-5"><span> First time visit on PHYSYS ? <Link to="/Register" className="font-semibold">Sign In</Link></span></div>
                    </div>
            </form>
            
          </div>
        </div>
      </div>    
    </div>
    )

}

export default Login;