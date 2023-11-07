import CustomButton from "../button/CustomButton";
import "./EmotionFaceSection.css"
const EmotionFaceSection = ({face, mood}) => {
    return (
        <div className=''>
            <img src={face} alt='mood' className='face-img mood-section'/>
            <br/>
            <br/>
            <p className='mood-heading'>Mihasa is Now in a {mood} Mood</p>
            <CustomButton
                type="button"
                variant="history"
                radius="20"
                size="sm"
                className="chart-btn-responsive me-0"
                fontSize="18"
                width="180"
            >
                Respond to Her
            </CustomButton>
            <div className="response-div">
                <p style={{textAlign:'justify'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,

                </p>
            </div>
        </div>
    );
}

export default EmotionFaceSection;