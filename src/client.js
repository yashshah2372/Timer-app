const Client = (function() {

    function getTimers(success, error=null) {
        return fetch('http://localhost:3000/api/timers', {
            headers: {
                Accept: 'application/json',
            },
        }).then(checkStatus)
        .then(parseJSON)
        .then(success);
    }

    function createTimer(data) {
        return fetch('http://localhost:3000/api/timers', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(checkStatus);
    }

    function updateTimer(data) {
        return fetch('http://localhost:3000/api/timers', {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(checkStatus);
    }

    function deleteTimer(data) {
        return fetch('http://localhost:3000/api/timers', {
            method: 'DELETE',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(checkStatus);
    }

    function startTimer(data) {
        return fetch('http://localhost:3000/api/timers/start', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(checkStatus);
    }

    function stopTimer(data) {
        return fetch('http://localhost:3000/api/timers/stop', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(checkStatus);
    }

    function checkStatus(response) {
        if(response.status >= 200 && response.status < 300) {
            console.log("Response: ", response)
            return response;
        } else {
            const error = new Error(`HTTP Error ${response.statusText}`);
            error.status = response.status;
            error.response = response;
            console.log(error);
            throw error;
        }
    }

    function parseJSON(response) {
        console.log("In ParseJSON");
        return response.json();
    }
    return {
        getTimers,
        createTimer,
        updateTimer,
        deleteTimer,
        startTimer,
        stopTimer
    };
}());


export default Client;