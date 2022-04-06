import React, { useState } from "react";
import "../styles.css";

class CircleSvg extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
        }

        this.showOval = this.showOval.bind(this);
    
        // This binding is necessary to make `this` work in the callback
      }
    
      showOval(){
          console.log(this.props.current);
          console.log(this.props.name);
          if(this.props.current == this.props.name){
              return "";
          }
          else{
              return "hidden";
          }
      }

      render(){
          console.log(this.props);
        return(
            <div {...this.props} className={this.showOval()}>
    <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            version="1"
            viewBox="0 0 375 375"
            className="oval"
          >
           
            <path
                fill="none" stroke="hsl(333deg, 100%, 45%)" stroke-width="5"
                d="M28.926 214.715c-.09-2.707-.02-5.39.172-8.063.187-2.668.5-5.324.914-7.957a100.763 100.763 0 013.738-15.554 99.882 99.882 0 0114.582-28.395 49.18 49.18 0 011.207-1.605l1.227-1.582c.855-1.024 1.675-2.082 2.57-3.075l1.32-1.511 1.36-1.47c.898-.991 1.859-1.917 2.793-2.874 3.793-3.762 7.886-7.211 12.175-10.375 8.59-6.32 18.016-11.414 27.82-15.434a161.907 161.907 0 0114.962-5.289c5.054-1.539 10.183-2.812 15.34-3.91 2.574-.574 5.167-1.027 7.757-1.52 2.594-.413 5.192-.874 7.797-1.21 5.211-.758 10.442-1.286 15.672-1.723 2.621-.191 5.238-.402 7.86-.52 1.308-.058 2.62-.148 3.93-.191l3.929-.129 1.969-.062 1.964-.028 3.93-.047c2.613-.007 5.223 0 7.836.024 10.445.12 20.895.512 31.332 1.293 5.215.383 10.43.887 15.637 1.457 5.199.601 10.402 1.285 15.582 2.094 5.18.824 10.347 1.746 15.496 2.808a278.02 278.02 0 0115.351 3.649c10.172 2.726 20.215 6.066 29.954 10.27a167.127 167.127 0 0114.324 6.987 135.015 135.015 0 0113.57 8.536c4.348 3.148 8.52 6.59 12.379 10.41 3.848 3.828 7.414 8.008 10.422 12.652 3.004 4.633 5.504 9.703 7.015 15.211a41.011 41.011 0 011.407 8.531c.011.735.062 1.461.035 2.203l-.027 1.102-.09 1.055c-.13 1.406-.184 2.824-.461 4.21-.856 5.587-2.668 10.989-5.192 15.962-2.523 4.984-5.742 9.539-9.355 13.675-3.652 4.098-7.715 7.746-11.973 11.082l-3.254 2.422c-.265.207-.543.399-.824.582l-.836.559-3.363 2.242c-.563.363-1.149.691-1.719 1.043l-3.457 2.063c-9.332 5.261-19.164 9.402-29.187 12.785-10.032 3.382-20.258 6.004-30.563 8.113l-3.863.785c-1.29.27-2.586.465-3.88.7l-3.882.675-1.937.336c-.649.113-1.297.2-1.946.297l-7.789 1.14-7.8.95c-2.606.344-5.215.547-7.82.812-2.606.246-5.212.524-7.821.688l-7.828.574-7.836.406-3.914.203-11.754.34-7.836.07c-2.61.024-5.223.055-7.832.024a590.603 590.603 0 01-31.328-.961 478.217 478.217 0 01-15.653-1.148 404.93 404.93 0 01-15.62-1.68c-10.4-1.317-20.77-3.035-31.04-5.34-10.27-2.305-20.457-5.168-30.386-8.941-4.958-1.887-9.856-3.98-14.626-6.407-2.394-1.191-4.734-2.5-7.058-3.851a111.034 111.034 0 01-6.797-4.383 95.758 95.758 0 01-6.434-4.992 75.36 75.36 0 01-5.933-5.684c-3.762-4.012-7.043-8.582-9.535-13.605-2.496-5.02-4.14-10.516-4.758-16.114-.317-2.8-.383-5.609-.227-8.41.168-2.851.64-5.672 1.356-8.402 1.445-5.469 3.867-10.555 6.84-15.188 2.98-4.632 6.515-8.828 10.39-12.625 7.782-7.562 16.875-13.593 26.68-18.023a89.888 89.888 0 0115.25-5.305c5.238-1.3 10.629-2.113 16.078-2.261 5.441-.149 10.95.359 16.297 1.714 5.344 1.344 10.516 3.563 15.144 6.637a3.047 3.047 0 01.856 4.223 3.04 3.04 0 01-4.18.879l-.004-.004c-4.058-2.63-8.586-4.508-13.316-5.64-4.734-1.141-9.66-1.544-14.586-1.352-4.93.175-9.86.957-14.68 2.199a83.339 83.339 0 00-14.082 5.039c-9.078 4.187-17.5 9.898-24.562 16.887-3.516 3.5-6.68 7.332-9.285 11.468-2.606 4.133-4.649 8.575-5.825 13.18-.593 2.3-.968 4.64-1.093 6.98a42.999 42.999 0 00.234 7.165 40.81 40.81 0 004.117 13.625c2.153 4.277 5.012 8.234 8.375 11.78a68.311 68.311 0 005.348 5.06 86.518 86.518 0 005.894 4.519 107.951 107.951 0 006.313 4.027c2.172 1.25 4.367 2.47 6.629 3.586 4.496 2.262 9.164 4.239 13.91 6.028 9.5 3.566 19.363 6.304 29.352 8.504 9.996 2.207 20.14 3.832 30.332 5.109a401.59 401.59 0 0015.34 1.621c5.124.441 10.257.824 15.402 1.102 10.281.57 20.594.863 30.906.89 2.582.024 5.16-.008 7.738-.039l7.73-.082 7.731-.238 3.86-.121 3.859-.196 7.71-.398 7.7-.563c2.57-.16 5.125-.437 7.684-.675 2.558-.258 5.12-.461 7.672-.797l7.648-.93 7.617-1.113c.633-.098 1.274-.18 1.903-.285l1.894-.332 3.79-.66c1.257-.231 2.53-.418 3.784-.68l3.762-.766c10.031-2.047 19.95-4.594 29.598-7.84 9.636-3.261 19.023-7.203 27.804-12.125l3.235-1.922c.535-.324 1.086-.636 1.613-.972l1.563-1.04 1.562-1.034.781-.52c.266-.168.524-.348.766-.539l3-2.223c3.922-3.062 7.621-6.37 10.894-10.027 3.23-3.684 6.051-7.684 8.235-11.973 2.187-4.285 3.722-8.859 4.453-13.554.25-1.164.281-2.356.398-3.536l.082-.886.02-.848c.027-.558-.02-1.129-.02-1.7-.12-2.273-.511-4.57-1.117-6.835-1.234-4.535-3.355-8.918-5.992-13-2.637-4.094-5.836-7.879-9.332-11.39-3.516-3.508-7.363-6.715-11.414-9.676a127.793 127.793 0 00-12.75-8.09 159.87 159.87 0 00-13.637-6.715c-9.316-4.07-19.012-7.344-28.875-10.031-19.75-5.36-40.16-8.454-60.668-10.106-10.265-.832-20.562-1.277-30.87-1.46-2.579-.036-5.161-.06-7.735-.071l-3.852.027-1.926.012-5.777.14c-1.281.036-2.562.11-3.844.16-2.566.094-5.12.278-7.683.446-5.11.39-10.215.863-15.285 1.563-2.543.304-5.063.734-7.59 1.12-2.516.454-5.04.872-7.535 1.41-10.012 2.02-19.84 4.876-29.29 8.618-9.437 3.758-18.468 8.523-26.675 14.438-4.102 2.957-8.008 6.18-11.63 9.699-.89.894-1.808 1.761-2.663 2.691l-1.301 1.371-1.258 1.414c-.855.93-1.637 1.922-2.457 2.88l-1.176 1.484c-.394.496-.78.992-1.152 1.5-6.082 8.062-10.832 17.12-14.074 26.71a95.354 95.354 0 00-3.738 14.708 85.734 85.734 0 00-.97 7.523 71.508 71.508 0 00-.265 7.527v.012a2.434 2.434 0 01-2.379 2.484 2.432 2.432 0 01-2.48-2.351"
              ></path>
          </svg>
          </div>
        )
      }
}export default CircleSvg;