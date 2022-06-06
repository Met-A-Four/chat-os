import React from 'react'

import { AddChannel} from '../assets';
const TeamChannelList = ({ children,error=false,loading,type}) => {
    if(error){
        return type === 'team' ?(
            <div className="team-channel-list">
                <p className="team-channel-list_message">
                    PLease wait a moment and try again to resolve connection error
                </p>
            </div>
        ) :null
    }
    if(loading){
        return(
            <div className="team-channel-list">
                <p className="team-channel-list_message loading">
                {type === 'team' ? 'Channels' : 'Messages'} loading...
                </p>
            </div>
        )
    }
  return (
    <div className="team-channel-list">
        <div className="team-channel-list_header">
            <p className="team-channel-list_heaser_title">
            {type === 'team' ? 'Channels' : 'Direct Messages'}  
            </p>
        </div>
        {children}
    </div>
  )
}

export default TeamChannelList