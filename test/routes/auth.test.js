const request = require("supertest");
const app = require("../../app");
const { deleteUser } = require("../../models/user")
const { connector } = require("../../models/databaseUtil");

let server, agent;
beforeAll((done) => {
    server = app.listen(3500, () => {
        agent = request.agent(server);
        done()
    });
});

function cleanUp(callback) {
    deleteUser('S1032190220').then(() => {
        connector.disconnect((err) => {
            if (err)
                console.log(err);
            server.close((err) => {
                if (err)
                    console.log(err);
                callback();
            })
        })
    })
}

afterAll((done) => {
    cleanUp(done)
})

describe("checking user functions", () => {
    it("create user", async () => {
        const response = await agent
            .post("/users/add")
            .send({
                "name": "testuser",
                "password": "123",
                "emailId": "test@gmail.com",
                "uid": "S1032190220",
                "userType": "student"
            })
        expect(response.headers['content-type']).toMatch(/json/);
        expect(response.status).toBe(200)
        expect(response.body.res).toMatch(/added user/)
        await deleteUser("S1032190220")
    });
})

describe("checking auth functions", () => {
    beforeEach(async () => {
        await agent.post("/users/add").send({
            "name": "testuser",
            "password": "123",
            "emailId": "test@gmail.com",
            "uid": "S1032190220",
            "userType": "student"
        });
    });

    afterEach(async () => {
        await deleteUser("S1032190220")
    })

    it("login", async function () {
        const response = await agent
            .post("/auth")
            .send({
                "id": "S1032190220",
                "password": "123"
            });
        expect(response.status).toBe(200)
        expect(response.body.res).toBe("welcome")
    })

    it("validate", async function () {
        const token = await agent
            .post("/auth")
            .send({
                "id": "S1032190220",
                "password": "123"
            })
            .then(response => response.body.user.token)
        const response = await agent
            .post("/auth/validateUser")
            .set("Authorization", `Bearer ${token}`)
        expect(response.status).toBe(200)
    })

    // TODO: check if password resetting works 
    // mock is not getting called
    // it("test password resetting", async ()=>{
    //     const {sendOTP} = require('../../util'); 
    //     let otpStore;

    //     jest.mock("../../util", () => {
    //         const original = jest.requireActual("../../util"); 
    //         return {
    //             ...original,
    //             sendOTP: jest.fn()
    //         };
    //     });

    //     // jest.mock("../../util");
    //     // util.sendOTP = jest.fn((emailId, otp)=>console.log(otp))
    //     sendOTP.mockImplementation((e, o) => {console.log(e, o);return { mockedValue: 2 };});
    //     agent
    //     .post("auth/sendOTP")
    //     .send({
    //         "uid": "S1032190220",
    //         "emailId": "test@gmail.com"
    //     });

    //     console.log(otpStore);
    // })

})