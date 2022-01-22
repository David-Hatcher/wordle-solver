
import '../styles/checkmark.css'

const DoneScoring = (props) => {
    return (
        <>
            <div className={`border-2 border-slate-400 h-12 w-12 rounded-md mt-10 mr-2 disabled-${props.disabled}`} onClick={props.handleClick}>
                <div className="checkmark" title="Click to get next guess"></div>
            </div>
        </>
    )
}

export default DoneScoring;