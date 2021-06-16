import '../Scss/syllabusCard.scss';
import { Link } from 'react-router-dom';
const SyllabusCard = (props) => {
  console.log(props.data.Title);
  return (
    <div id='Card'>
      <div className='CardTitle'>{props.data.Title}</div>
      <div className='cardContent'>
        <p className='classText'>{props.data.Content}</p>
        <Link to={props.data.Link}>
          <div className='accessSyllabus'>Access This Syllabus</div>
        </Link>
      </div>
    </div>
  );
};

export default SyllabusCard;
