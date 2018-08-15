import React from 'react';
import {Input} from 'semantic-ui-react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import axios from 'axios';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
  }

  componentDidMount() {
    axios.post('homes/swipe').then(result=>{
      if(result.meta.status === 200) {
        this.setState({
          images: result.data.list
        });
      }
    })
  }

  render() {
    return (
      <div className='main-content'>
        <div className="home-topbar">
          <Input fluid icon={{ name: 'search', circular: true, link: true }} placeholder='搜房源...' />
        </div>
        <div className="home-content">
          <ImageGallery items={this.state.images} showThumbnails={false} />
        </div>
      </div>
    );
  }
}

export default Home;
