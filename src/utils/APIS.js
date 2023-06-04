// const BACKEND_DOMAIN = '';
const BACKEND_PORT = '4444';
const BACKEND_DOMAIN = '192.168.43.16';
// const BACKEND_DOMAIN = '';
const mainAddress =  `http://${BACKEND_DOMAIN || 'localhost'}:${BACKEND_PORT}/api/v1/isma/`;

let APIS = {
    userApis: {
        signIn: `${mainAddress}user/signin`,
        signUp:`${mainAddress}user/signup`,
        requestPasswordReset: `${mainAddress}user/requestPasswordReset`,
        resetPassword: `${mainAddress}user/resetPassword?id=`,
        updateUserAccount: `${mainAddress}user/update?id=`,
        findById: `${mainAddress}user/findById?id=`,
        findByEmail: `${mainAddress}user/findByEmail?email=`,
        list: `${mainAddress}user/list`,
    },
    contractApis: {
        add: `${mainAddress}contract/add`,
        update: `${mainAddress}contract/update?id=`,
        delete: `${mainAddress}contract/delete?id=`,
        list: `${mainAddress}contract/list`,
        findById: `${mainAddress}contract/findById?id=`,
        findByOwnerId: `${mainAddress}contract/findByOwnerId=`,
        findByStatus: `${mainAddress}contract/findByStatus=`,
        findByTenantId: `${mainAddress}contract/findByTenantId=`,
    },
    propertyApis: {
        add: `${mainAddress}property/add`,
        update: `${mainAddress}property/update?id=`,
        delete: `${mainAddress}property/delete?id=`,
        list: `${mainAddress}property/list`,
        findById: `${mainAddress}property/findById?id=`,
        findByLocation: `${mainAddress}property/findByLocation?location=`,
        findByMapCoordinates: `${mainAddress}property/findByMapCoordinates?mapCoordinates=`,
        findByOwnerId: `${mainAddress}property/findByOwnerId?ownerId=`,
        findByPostId: `${mainAddress}property/findByPostId?postId=`,
        findByStatus: `${mainAddress}property/findByStatus?status=`,
    },
    joinPostApis: {
        add: `${mainAddress}joinPost/add`,
        update: `${mainAddress}joinPost/update?id=`,
        list: `${mainAddress}joinPost/list`,
        findById: `${mainAddress}joinPost/findById?id=`,
        findByPropertyId: `${mainAddress}joinPost/findByPropertyId?propertyId=`,
        findByExpectedActivities: `${mainAddress}joinPost/findByExpectedActivities?expectedActivity=`,
        findByOwnerId: `${mainAddress}joinPost/findByOwnerId?ownerId=`,
        findByPostingTenantId: `${mainAddress}joinPost/findByPostingTenantId?postingTenantId=`
    },
    joinRequestApis: {
        add: `${mainAddress}joinRequest/add`,
        update: `${mainAddress}joinRequest/update?id=`,
        delete: `${mainAddress}joinRequest/delete?id=`,
        list: `${mainAddress}joinRequest/list`,
        findById: `${mainAddress}joinRequest/findById?id=`,
        findByJoinPost: `${mainAddress}joinRequest/findByJoinPost?joinPost=`,
        findByPropertyId: `${mainAddress}joinRequest/findByPropertyId?properyId=`,
    },
    rentRequestApis: {
        add: `${mainAddress}rentRequest/add`,
        update: `${mainAddress}rentRequest/update?id=`,
        delete: `${mainAddress}rentRequest/delete?id=`,
        list: `${mainAddress}rentRequest/list`,
        findById: `${mainAddress}rentRequest/findById?id=`,
        findByPropertyId: `${mainAddress}rentRequest/findByPropertyId?propertyId=`,
    },
    files: {
        profiles: `${mainAddress}profiles/`,
        property: `${mainAddress}property/`,
    }
}

module.exports = APIS;