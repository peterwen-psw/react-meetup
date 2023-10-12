import MeetupsItem from "./MeetupsItem";
import classes from "./MeetupsList.module.css";

function MeetupsList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupsItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}
export default MeetupsList;
