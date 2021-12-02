import React, { useState, useEffect} from 'react'
// import Board from './Board';
import Button from '@mui/material/Button'; 

function FriendList(props) {

    const [friends, setFriends] = useState(props.currentUser.friends.map(function (ind) {
        return props.users[parseInt(ind)];
    }));
    // const [user, setCurUser ] = useState(props.currentUser);
    const [selectedFriendID, setSelectedFriendID] = useState(props.curFriend);
    const handleFriendClick = (id) =>{
        setSelectedFriendID(parseInt(id));
        props.updateDisplayingFriend(id);
    };
    

    useEffect(()=>{
        setFriends(props.currentUser.friends.map(function (ind) {
            return props.users[parseInt(ind)];
        }));
    },[props.users])


    return (
        <div id="friendListContainer">
        

            
                    
                
                {friends.map(function (friend, index) {
                    return (

                        <Button key={index} id = {friend.userID === selectedFriendID ? 'selected' : ''} className='friend' onClick={() => handleFriendClick(friend.userID)}>
                            <img className="friendimg" src={friend.profileImg} alt=""/>
                            
                                {friend.firstName}
                            
                        </Button>



                    )
                })}
           
           
        
            {/* <div id="board"><Board project={projects[selectedProjectID]} updateGroup={props.updateGroup}/></div> */}
        
        </div>
    )
}

export default FriendList
