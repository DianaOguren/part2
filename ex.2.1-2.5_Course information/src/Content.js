const Content = (props) => {
    
    var places = props.content.map(function(e){
        return (<p key={e.name}>{e.name} {e.exercises}</p>);
    });
    return(places);
    };


export default Content;