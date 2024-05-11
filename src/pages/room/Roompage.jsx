import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


const Roompage = () => {
    const { roomId }=useParams();
    console.log(roomId)

    const myMeeting=async(element )=>{
        const appID =558650110 ;
      const serverSecret = "ae4063eec7d249c7fcd90489c56f129f";
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,  Date.now(),  "Rahim");

      const zc=ZegoUIKitPrebuilt.create(kitToken);
      zc.joinRoom({
        container:element,
        sharedLinks:[
            {
                name:"Copy Link",
                url:`http://localhost:3000/room/${roomId}`,
            },
        ],
        scenario:{
        mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
      })

    }


  return (
    <div>
        <div ref={myMeeting}/>
    </div>
  )
}

export default Roompage