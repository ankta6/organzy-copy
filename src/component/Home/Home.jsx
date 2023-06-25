import React from 'react'
import Welcome from './Welcome/Welcome'
import Welcome2 from './Welcome/Welcome2'
import Blog from './Blogs/Blog'
import Our_Services from './Services/Our_Services'
import Tech from './technologies/tech'

function Home() {
  return (
    <div>
      <Blog />
      <Welcome />
      <Welcome2 />
      <Tech />
      <Our_Services />
    </div>
  );
}

export default Home