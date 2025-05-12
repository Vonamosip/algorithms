function myPromiseAll(promises: Promise<any>[]): Promise<any[]> {
    return new Promise((resolve, reject) => {
        if (promises.length === 0) {
            return resolve([]);
        }
        const results: any[] = [];
        let completedCount = 0;
        let isRejected = false;

        for (let i = 0; i < promises.length; i++) {
            promises[i].then(value => {
                if (isRejected) return;
                results[i] = value; 
                completedCount++;
                if (completedCount === promises.length) {
                    resolve(results);
                }
            }).catch(error => {
                if (isRejected) return;
                isRejected = true;
                reject(error);
            });
        }   
    });
}
