// import React from "react";
// // import ReactDOM from "react-dom";
// import $ from "jquery";
// import "turn.js";
// import "./AlbumCopa.css";

// class AlbumCopaCopy extends React.Component {
//     static constructor() {
//         defaultProps = {
//         style: {},
//         className: "",
//         options: {},
//     };

//     // eslint-disable-next-line no-undef
//     componentDidMount();
//     {
//       if (this.el) {
//         $(this.el).turn(Object.assign({}, this.props.options));
//       }
//       document.addEventListener("keydown", this.handleKeyDown, false);
//     }

//     componentWillUnmount();
//     {
//       if (this.el) {
//         $(this.el).turn("destroy").remove();
//       }
//       document.removeEventListener("keydown", this.handleKeyDown, false);
//     }

//     handleKeyDown = (e) => {
//       if (e.keyCode === 37) {
//         $(this.el).turn("previous");
//       }
//       if (e.keyCode === 39) {
//         $(this.el).turn("next");
//       }
//     };

//     render();
//     {
//       return (
//         <div
//           className={this.props.className}
//           style={Object.assign({}, this.props.style)}
//           rel={(el) => (this.el = el)}
//         >
//           {this.props.children}
//         </div>
//       );
//     }

//     const options = [
//       {
//         width: 800,
//         height: 600,
//         autoCenter: true,
//         display: "double",
//         acceleration: true,
//         elevation: 50,
//         gradients: !$.isTouch,
//         when: {
//           turned: function (e, page) {
//             console.log("Current view: ", $(this).turn("view"));
//           },
//         },
//       },
//     ];

//     const pages = [
//       "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/01.jpg",
//       "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/02.jpg",
//       "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/03.jpg",
//       "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/04.jpg",
//       "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/05.jpg",
//       "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/06.jpg",
//     ];

//     return (
//       <Turn
//         className="container" // slider
//       >
//         <section id="header" className="text-center">
//           <h3 className="title" title="Album da Copa 2022">
//             &gt; Album - Copa 2022 - Copy
//           </h3>
//         </section>

//         <div className="flipbook">
//           <div className="hard">Turn.js</div>
//         </div>
//       </Turn>
//     );
// }

// export default AlbumCopaCopy;
