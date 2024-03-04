//const token = "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoibmlrX3JhdmF0IiwianRpIjoiZjkwZGE0NjQtNWZlZS00MzM1LTgyMDAtYTJlZjk3YmUwMzA2IiwiZXhwIjoxNzA5NjMzNDM2LCJpc3MiOiJVc2VyIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo0NDM2NyJ9.AQS3dqkB0EdgABuROQLPM-18Fl27tcFHEGegRI_dayQ";
const FetchData = (url, token, succes, error) => {
    fetch(url, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }).then(response => {
        if (!response.ok) {
            if (response.status === 404) {
                error('URL not Found');
            }
        }
        return response.json();
    }).then(data => {
        console.log(data);
        succes(data);
    }).catch(err => {
        console.log(err);
    });
}

const PostData = (url, token, payload, PostSuccess, error) => {
    fetch(url, {
        method: 'post',
        body: JSON.stringify(payload),
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json' // Specify content type
        }
    })
        .then(res => {
            if (!res.ok) {
                if (res.status === 404) {
                    error('URL not Found');
                } else {
                    error('Something went wrong');
                }
                return Promise.reject('Error in fetch'); // Reject the promise to skip the next then block
            }
            return res.json();
        })
        .then(data => {
            PostSuccess(data.token);
        })
        .catch(err => {
            console.log(err);
            // Handle other errors here if needed
        });
};


const HttpService = {
    FetchData,
    PostData
}

export default HttpService;