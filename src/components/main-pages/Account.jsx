import Footer from './Footer';
import holi1 from "../../images/Holi 1.png";
import holi2 from "../../images/Holi 2.png";
import { MdAccountCircle } from "react-icons/md";
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function Account() {

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    imageUrl:''
  });
  const default_image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiHbdK68vCaQ1KMat0QzKBefxz_baEHAHFsg&s	';
  
  const [login, setLogin] = useState(false);
  axios.defaults.withCredentials = true;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/user/Account', {
        });
        setUserData(response.data);
        setLogin(true);
      } catch (error) {
        console.error('Fetch user data error:', error);
        
      }
    };
    fetchUserData();
  }, []);


  const handleDelete = () => {
    setLogin(false);
    axios.get('http://localhost:5000/user/logout')
    
      .then(res => {
        window.location.reload(true);
      })
      .catch(err => {
        console.log(err);
      });
  };
  
  return (
    <div className="wrapper">
      <div className='w-full bg-[rgb(25,31,92)] h-[69px] flex flex-row'>
        <div className='float-left basis-1/5'>
          <img className='mt-4' src={holi1} alt='' />
        </div>

        <div className='basis-3/5'>
          <p className='mt-[7.59px] text-center text-white text-[20px] font-bold font-montserat'>YOUR ACCOUNT</p>
          <p className='mt-[1px] text-center text-white text-[14px] font-light font-montserat'>EFFORTLESS MANAGEMENT</p>
        </div>

        <div className=' basis-1/5'>
          <img className='float-right' src={holi2} alt='' />
        </div>
      </div>




      <div className='w-[266px] m-auto flex flex-raw pt-8'>
        <div className='w-[73px] h-auto mt-[9px] '>
          {userData.imageUrl ?  <img src={userData.imageUrl} alt='img-user' className=' rounded-[37px]'/> : <img src={default_image} alt='img-user' className=' rounded-[37px]'/>}
          
          {/*<MdAccountCircle size={73} color='#191F5C'  />*/}
        </div>
        <div className='pt-3 w-[153px] h-auto ml-[2px]'>
          <p className='text-[14px] text-center'>{userData.name ? userData.name : <p>Loading Data...</p>}</p>
          <p className='text-[14px] text-center'>{userData.phone ? userData.phone : <p>Loading Data...</p>}</p>
          <p className=' text-[14px] text-center'>{userData.email ? userData.email : <p>Loading Data...</p>}</p>
        </div>
      </div>

      <div className='w-[266px] bg-[rgb(25,31,92)] h-[41px] m-auto mt-8 flex flex-row rounded-full'>
        <div className=' h-[24px] text-white font- Montserrat font-bold  text-[20px] pt-2 pl-[48px]'>
          <p className='cursor-pointer '>YOUR COURSES</p>
        </div>
      </div>

      <div className='flex items-center justify-center '>
        <p>course 01</p>
      </div>

      <div className='flex items-center justify-center '>
        {login ? (
          <button className='text-white border-white border-[1px] w-[110px] h-[40px] rounded-[18px] bg-[rgb(25,31,92)] hover:bg-blue-700'
          onClick={handleDelete}
        >Logout
          </button>
        ) : null}
      </div>

      
    
      
     

      <div className='bottom-headder'><Footer/></div>

    </div>
  )
}
