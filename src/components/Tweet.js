import { ProfileImage } from "./ProfileImage";
import { Timestamp } from "./Timestamp";
import { Message } from "./Message";
import { Actions } from "./Actions";
import { User } from "./User";

function Tweet(props) {
  //console.log(props)
  return (
    <div className="tweet">
     <ProfileImage image={props.tweet.user.image}/>
      <div className="body">
        <div className="top">
          <User userName={props.tweet.user.name} 
            handle= {props.tweet.user.handle}
          />
          <Timestamp timeStamp= {props.tweet.timestamp} />
        </div>

       <Message message= {props.tweet.message}/>
        <Actions />
       
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
