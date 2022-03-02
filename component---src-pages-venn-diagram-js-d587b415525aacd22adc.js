"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[4387],{9935:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),l=n(5444),i=n(1496),r=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function o(e){var t=e.imgName,n=e.caption;if(r.includes(t))return a.createElement("p",null,"TODO");var o=(0,l.useStaticQuery)("3289484431").allFile.edges.find((function(e){return e.node.name.includes(t)}));return o?a.createElement(a.Fragment,null,a.createElement("div",{className:"chartImageContainer"},a.createElement(i.Z,{alt:n,fluid:o.node.childImageSharp.fluid,className:"chartImageImg"}),a.createElement("div",{className:"chartImageOverlay"},a.createElement("div",{className:"chartImageOverlayText"},a.createElement("p",null,n))))):null}},7834:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),l=n(9935),i=n(7408),r=n(5444);function o(e){var t=e.imgName,n=e.caption,o=e.linkTo;return a.createElement(i.Z,{xs:12,md:4},a.createElement(r.Link,{to:o},a.createElement(l.Z,{imgName:t,caption:n})))}},6640:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var a=n(7294),l=n(1006),i=n(3203),r=n(6187),o=n(7567),m=n(994),c=n(7834),s=n(9869),u=n(5444),h=n(3727),d=n(9935),p=n(7408),g=n(6594),E=n(3026),b=n(458);function f(){return a.createElement(i.Z,{title:"Venn Diagram",isTocEnabled:!0,seoDescription:"A collection of Venn Diagram examples made with Python, coming with explanation and reproducible code"},a.createElement(l.Z,{title:"Venn Diagram",description:"<p>A <a href='https://www.data-to-viz.com/graph/venn.html'>Venn Diagram</a> (also called <code>primary diagram</code>, <code>set diagram</code> or <code>logic diagram</code>) is a diagram that shows all possible logical relationships between a finite collection of different sets. Fortunately, the <code>matplotlib_venn</code> library allows to build one easily with Python.</p>"}),a.createElement(r.Z,null,a.createElement("h2",{id:"Quick"},"⏱ Quick start"),a.createElement(m.Z,{className:"align-items-center"},a.createElement(p.Z,{md:6},a.createElement("p",null,"The ",a.createElement("code",null,"venn2")," function of the ",a.createElement("code",null,"matplotlib_venn")," library is the best way to make a Venn Diagram with Python, as shown on the code below."),a.createElement("p",null," Note that several input formats are possible to get there. This first post of the section goes through them and should get you started from any kind of input. 🔥")),a.createElement(p.Z,{md:6},a.createElement(u.Link,{to:"/170-basic-venn-diagram-with-2-groups"},a.createElement(d.Z,{imgName:"170_Basic_Venn_Diagram",caption:"Most basic Venn Diagram with Python"})))),a.createElement(E.Z,null,"# library\nimport matplotlib.pyplot as plt\nfrom matplotlib_venn import venn2\n\n# Use the venn2 function\nvenn2(subsets = (10, 5, 2), set_labels = ('Group A', 'Group B'))\nplt.show()\n")),a.createElement(b.Z,null),a.createElement("div",{className:"greySection",id:"related"},a.createElement(r.Z,null,a.createElement("h2",{id:"Matplotlib-venn pkg"},"ℹ ️ A note on the ",a.createElement("code",null,"Matplotlib-venn")," library"),a.createElement("p",null,"The ",a.createElement("code",null,"matplotlib-venn")," library has been created by ",a.createElement("a",{href:"https://github.com/konstantint/matplotlib-venn"},"Konstantin Tretyakov"),". Its official documentation is available on ",a.createElement("a",{href:"https://github.com/konstantint"},"github"),". Take a minute to give him a ⭐ if you use it!"),a.createElement("a",{href:"https://github.com/konstantint/matplotlib-venn"},a.createElement(g.Z,{size:"sm"},"Matplotlib-venn documentation")))),a.createElement(b.Z,null),a.createElement(r.Z,null,a.createElement("h2",{id:"Matplotlib"},a.createElement(h.rS,null),"Venn Diagram with ",a.createElement("code",null,"Matplotlib")," and ",a.createElement("code",null,"matplotlib-venn")),a.createElement("p",null,a.createElement("code",null,"Matplotlib")," is probably the most famous and flexible python library for data visualization. It is appropriate to build any kind of chart, including the lollipop plot thanks to its ",a.createElement("code",null,"stem()")," function."),a.createElement(m.Z,null,a.createElement(c.Z,{imgName:"171_Basic_Venn_3-groups",caption:"Venn Diagram with 3 sets.",linkTo:"/171-basic-venn-diagram-with-3-groups"}),a.createElement(c.Z,{imgName:"172_custom_venn_diagram3",caption:"Customize Venn Diagram: circles, lables and more.",linkTo:"/172-custom-venn-diagram"}),a.createElement(c.Z,{imgName:"174_Change_Background_color_venn",caption:"Change Venn diagram background color.",linkTo:"/174-change-background-colour-of-venn-diagram"})),a.createElement("p",null,"The ",a.createElement("code",null,"Venn2()")," function allows to customize the venn diagram as much as you want, allowing to build some pretty neat figures as below:"),a.createElement("div",{style:{maxWidth:"600px",margin:"0 auto"}},a.createElement(u.Link,{to:"/173-elaborated-venn-diagram"},a.createElement(d.Z,{imgName:"173_elaborated_Venn_diagram",caption:"The matplotlib-venn library allows a high level of customization. Here is an example taking advantage of it"})))),a.createElement(b.Z,null),a.createElement(r.Z,null,a.createElement("h2",{id:"UpSet Chart"},"Upset plot as an alternative"),a.createElement("p",null,"Venn diagrams are great to visualize the intersection between 2 or 3 sets. Above that they become quite ",a.createElement("a",{href:"https://www.data-to-viz.com/graph/venn.html"},"messy and unreadable"),"."),a.createElement("p",null,"There is a alternative to them: the upSet plot that can be made thanks to the ",a.createElement("a",{href:"https://pypi.org/project/UpSetPlot/"},"upSetPlot")," library"),a.createElement("a",{href:"https://pypi.org/project/UpSetPlot/"},a.createElement(g.Z,{size:"sm"},"Show me!"))),a.createElement(b.Z,null),a.createElement("div",{className:"greySection",id:"related"},a.createElement(r.Z,null,a.createElement(s.Z,{chartFamily:"partOfAWhole"}))),a.createElement(b.Z,null),a.createElement(r.Z,null,a.createElement(o.Z,null)),a.createElement(b.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-venn-diagram-js-d587b415525aacd22adc.js.map