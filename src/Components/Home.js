import React from 'react';


// This is the Home Page Component that handles setting up the Home / Landing Page
class Home extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {

        return (

            <div>
                <h1>Hello World!</h1>
            </div>
        )
    }
}

// Export this entire Component to be brought in on App.js
export default Home;
