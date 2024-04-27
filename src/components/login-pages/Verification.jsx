import React from "react";
import holi1 from "../../images/Holi 1.png";
import holi2 from "../../images/Holi 2.png";
import jenzeict from '../../images/genZictcalss_logo 1.png';
import jenzeict2 from '../../images/genZictclass LOGO.png';
import memberHoli from '../../images/Member_Holi 1.png';
import memberHoli2 from '../../images/Member Holi 2 1.png';

//import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="h-auto">
      
        <div className="w-full bg-[rgb(25,31,92)] h-[69px] flex flex-row">
          <div className="float-left basis-1/5">
            <img className="mt-4" src={holi1} alt="" />
          </div>

          <div className="basis-3/5">
            <p className="mt-[7.59px] text-center text-white text-[20px] font-bold font-montserat">
              CONTACT US
            </p>
            <p className="mt-[1px] text-center text-white text-[14px] font-light font-montserat">
              GET IN TOUCH EASILY
            </p>
          </div>

          <div className=" basis-1/5">
            <img className="float-right" src={holi2} alt="" />
          </div>
        </div>

        <form >

            <div className="w-[210px] h-[225px] bg-[rgb(25,31,92)] mt-[39px] rounded-[28px] m-auto flex flex-col">
                <div className="w-[173px] m-5">
                  <p className="text-white text-[15px] font-bold text-center">VERIFICATION CODE</p>
                </div>
                <input type="text" className="w-[120px] h-[34px] rounded-[29px] ml-12"/>
                <div className="w-[186px] h-auto ml-[11px] mt-[7px]"><img src={jenzeict} alt=""/></div>

                <button>
                    <div className=" w-[152px] h-[22px] bg-[rgb(246,190,29)] mt-4 m-auto rounded-full">
                            <p className="text-white font-montserat text-[10px] font-bold text-center pt-[3px]">SUBMIT</p>
                    </div>
                </button>
            </div>
            
        </form>
        
        <div className="w-full h-[110px] bg-[rgb(25,31,92)] m-auto mt-[145px]">
          <p className="font-bold text-white text-[14px] pt-2 text-center font-montserat">Meet Our Web Development Team</p>
          <p className=" text-white text-[14px] text-center pt-1 font-light font-montserat">Our team consist of passionate individual dedicated to creating exeptional web experiences.</p>
        </div>
        
        <div className="w-[320px] m-auto mt-5">
          <div className="w-[320px] h-[128px]">
            <div className="relative">
              <div className="w-[118px] h-[118px] rounded-full bg-[rgb(25,31,92)] absolute top-[47px] left-[157px]"></div>
              <img className="ml-20 absoloute" src={memberHoli} alt="" />
            </div>
          </div>
          <div className="w-[320px] m-auto  ">
            <ul>
              <li className="text-[rgb(25,31,92)] font-bold text-[14px] ml-1 list-disc">Name:</li>
                  <dd className=" text-[rgb(25,31,92)] font-light text-[14px] ml-1">W.B.W.M.R.M.C Aluwihare</dd>
              <li className=" text-[rgb(25,31,92)] font-bold text-[14px] ml-1 list-disc">Role :</li>
                  <dd className="text-[rgb(25,31,92)] font-light text-[14px] ml-1">Backend Developper</dd>
              <li className="text-[rgb(25,31,92)] font-bold text-[14px] ml-1 list-disc">Expertise :</li>
                  <dd className="text-[rgb(25,31,92)] font-light text-[14px] ml-1 list-disc">JavaScript,Css,Nodejs,React</dd>
              <li className="text-[rgb(25,31,92)] font-bold text-[14px] ml-1 list-disc">Bio :</li>
                  <dd className="text-[rgb(25,31,92)] font-light text-[14px] text-justify ml-1">
                    Sample Name is a seasoned developer
                    with a passion for crafting beautiful 
                    and functional user interfaces.
                  </dd>
            </ul>
          </div>
        </div>

        <div className="w-[320px] m-auto mt-5">
          <div className="w-[320px] h-[164spx]">
            <div className="relative">
              <div className="w-[118px] h-[118px] rounded-full bg-[rgb(25,31,92)] absolute top-[47px] left-[65px]"></div>
              <img className="absoloute" src={memberHoli2} alt="" />
            </div>
          </div>
          <div className="w-[320px] m-auto  ">
            <ul>
              <li className="text-[rgb(25,31,92)] font-bold text-[14px] ml-1 list-disc">Name:</li>
                  <dd className=" text-[rgb(25,31,92)] font-light text-[14px] ml-1">W.B.W.M.R.M.C Aluwihare</dd>
              <li className=" text-[rgb(25,31,92)] font-bold text-[14px] ml-1 list-disc">Role :</li>
                  <dd className="text-[rgb(25,31,92)] font-light text-[14px] ml-1">Backend Developper</dd>
              <li className="text-[rgb(25,31,92)] font-bold text-[14px] ml-1 list-disc">Expertise :</li>
                  <dd className="text-[rgb(25,31,92)] font-light text-[14px] ml-1">JavaScript,Css,Nodejs,React</dd>
              <li className="text-[rgb(25,31,92)] font-bold text-[14px] ml-1 list-disc">Bio :</li>
                  <dd className="text-[rgb(25,31,92)] font-light text-[14px] text-justify ml-1">
                    Sample Name is a seasoned developer
                    with a passion for crafting beautiful 
                    and functional user interfaces.
                  </dd>
          </ul>
          </div>
        </div>

        <div className="w-[320px] m-auto mt-5">
          <div className="w-[320px] h-[128px]">
            <div className="relative">
              <div className="w-[118px] h-[118px] rounded-full bg-[rgb(25,31,92)] absolute top-[47px] left-[157px]"></div>
              <img className="ml-20 absoloute" src={memberHoli} alt="" />
            </div>
          </div>
          <div className="w-[320px] m-auto  ">
            <ul>
              <li className="text-[rgb(25,31,92)] font-bold text-[14px] ml-1 list-disc">Name:</li>
                  <dd className=" text-[rgb(25,31,92)] font-light text-[14px] ml-1">W.B.W.M.R.M.C Aluwihare</dd>
              <li className=" text-[rgb(25,31,92)] font-bold text-[14px] ml-1 list-disc">Role :</li>
                  <dd className="text-[rgb(25,31,92)] font-light text-[14px] ml-1">Backend Developper</dd>
              <li className="text-[rgb(25,31,92)] font-bold text-[14px] ml-1 list-disc">Expertise :</li>
                  <dd className="text-[rgb(25,31,92)] font-light text-[14px] ml-1 list-disc">JavaScript,Css,Nodejs,React</dd>
              <li className="text-[rgb(25,31,92)] font-bold text-[14px] ml-1 list-disc">Bio :</li>
                  <dd className="text-[rgb(25,31,92)] font-light text-[14px] text-justify ml-1">
                    Sample Name is a seasoned developer
                    with a passion for crafting beautiful 
                    and functional user interfaces.
                  </dd>
            </ul>
          </div>
        </div>

        <div className="w-[320px] m-auto mt-5">
          <div className="w-[320px] h-[164spx]">
            <div className="relative">
              <div className="w-[118px] h-[118px] rounded-full bg-[rgb(25,31,92)] absolute top-[47px] left-[65px]"></div>
              <img className="absoloute" src={memberHoli2} alt="" />
            </div>
          </div>
          <div className="w-[320px] m-auto  ">
            <ul>
              <li className="text-[rgb(25,31,92)] font-bold text-[14px] ml-1 list-disc">Name:</li>
                  <dd className=" text-[rgb(25,31,92)] font-light text-[14px] ml-1">W.B.W.M.R.M.C Aluwihare</dd>
              <li className=" text-[rgb(25,31,92)] font-bold text-[14px] ml-1 list-disc">Role :</li>
                  <dd className="text-[rgb(25,31,92)] font-light text-[14px] ml-1">Backend Developper</dd>
              <li className="text-[rgb(25,31,92)] font-bold text-[14px] ml-1 list-disc">Expertise :</li>
                  <dd className="text-[rgb(25,31,92)] font-light text-[14px] ml-1">JavaScript,Css,Nodejs,React</dd>
              <li className="text-[rgb(25,31,92)] font-bold text-[14px] ml-1 list-disc">Bio :</li>
                  <dd className="text-[rgb(25,31,92)] font-light text-[14px] text-justify ml-1">
                    Sample Name is a seasoned developer
                    with a passion for crafting beautiful 
                    and functional user interfaces.
                  </dd>
          </ul>
          </div>
        </div>

        <div className="m-auto w-[320px]">
          <img src={jenzeict2} alt=""className="m-auto"/>
        </div>
        
      
    </div>
  );
}

export default Login;
