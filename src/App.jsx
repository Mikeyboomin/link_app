import { useState } from 'react'
import './App.css'
import Button from './Button'
import Logo from './Logo'
import Profile from './Profile'
import Footer from './Footer'

const Links = [
  {
    name: 'Twitter Link',
    link: "http://www.twitter.com/freespich" 
  },
  {
    name: 'Zuri Team',
    link: 'https://training.zuri.team/'
  },
  {
    name: 'Zuri Books',
    link: 'http://books.zuri.team',
    desc: 'This is where you find books about design and coding'
  },
  {
    name: 'python Books',
    link: 'https://books.zuri.team/python-for-beginners?ref_id=<MikeyboominOfficial>',
    desc: 'Buy my book on python!'
  },
  {
    name: 'Background Check for Coders',
    link: 'https://background.zuri.team',
    desc: 'click here for your code background checks'
  },
  {
    name: 'Design Books',
    link: 'https://books.zuri.team/design-rules',
    desc: 'Get this free design book by zuri!'
  }
]



function App() {

  return (
    <div>
      <Profile />
      <Button id='twitter' desc={Links[0].desc} link={Links[0].link} name={Links[0].name} />
      <Button id='btn_zuri' desc={Links[1].desc} link={Links[1].link} name={Links[1].name} />
      <Button id='books' desc={Links[2].desc} link={Links[2].link} name={Links[2].name} />
      <Button id='book__python' desc={Links[3].desc} link={Links[3].link} name={Links[3].name} />
      <Button id='pitch' desc={Links[4].desc} link={Links[4].link} name={Links[4].name} />
      <Button id='book__design' desc={Links[5].desc} link={Links[5].link} name={Links[5].name} />
      <Logo />
      <Footer />
    </div>
  )
}

export default App
