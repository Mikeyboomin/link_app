import './Button.css'

// const anchor = [
//     {
//         link: 'http://twitter.com/freespich'
//     },
//     {
//         link: 'https://books.zuri.team'
//     }
// ]

// anchor[0].link

const Button = (props) => {
    return (
        <div>
            <a id='btn_zuri' className='fcc-btn' target='_blank' title={props.desc} href={props.link}>{props.name}</a>
        </div>
    )
}

export default Button;