class AppApiError extends Error {
    constructor(httpError){
        super();
        this.data = httpError?.response?.data;
        this.originError= httpError;
    }

    get apiMessage() {
        return this.data?.meta?.message || 'Invalid error';
    }
    
}

export {
    AppApiError
}