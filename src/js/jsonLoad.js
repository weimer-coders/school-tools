/**
* Loads a JSON file and returns a promise with the parsed data.
* @param {String} url - The url to process
* @return {Promise} - A promise
*/
function jsonLoad(url){
    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest();
        request.open('GET', url, true);

        request.onload = function() {
            if(request.status >= 200 && request.status < 400) {
                var data = JSON.parse(request.responseText);
                resolve(data);
            }
            else {
                reject(request);
            }
        };

        request.onerror = function() {
            reject(request);
        };

        request.send();
    });
}

export default jsonLoad;
