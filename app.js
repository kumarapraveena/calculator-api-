const express = require("express");
const app = express();
//Middleware Function
app.use(express.json());


app.post("/addition", async (req, res) => {
    try {
        let nums1 = req.body.nums1;
        let nums2 = req.body.nums2;
        if (isNaN(nums1) || isNaN(nums2)) {
            res.status(400).send({ "status": "error", "message": "Invalid Data Type" })
        }
        if (nums1 < -1000000 && nums2 < -100000) {
            res.status(400).send({ "status": "error", "message": "Underflow" })
        }
        if (nums1 > 1000000 && nums2 > 100000) {
            res.status(400).send({ "status": "error", "message": "Overflow" })
        }
        res.status(200).send({ "status": "success", "message": "The addition of two numbers is", sum: nums1 + nums2 })
    } catch (err) {
        res.status(400).send({ "status": "failure", "message": "cannot proceed" })
    }
})

app.post("/subtraction", async (req, res) => {
    try {
        let nums1 = req.body.nums1;
        let nums2 = req.body.nums2;
        if (isNaN(nums1) || isNaN(nums2)) {
            res.status(400).send({ "status": "error", "message": "Invalid Data Type" })
        }
        if (nums1 < -1000000 && nums2 < -100000) {
            res.status(400).send({ "status": "error", "message": "Underflow" })
        }
        if (nums1 > 1000000 && nums2 > 100000) {
            res.status(400).send({ "status": "error", "message": "Overflow" })
        }
        res.status(200).send({ "status": "success", "message": "The difference of two numbers is", difference: nums1 - nums2 })
    } catch (err) {
        res.status(400).send({ "status": "failure", "message": "cannot proceed" })
    }
})

app.post("/multiply", async (req, res) => {
    try {
        let nums1 = req.body.nums1;
        let nums2 = req.body.nums2;
        if (isNaN(nums1) || isNaN(nums2)) {
            res.status(400).send({ "status": "error", "message": "Invalid Data Type" })
        }
        if (nums1 < -1000000 && nums2 < -100000) {
            res.status(400).send({ "status": "error", "message": "Underflow" })
        }
        if (nums1 > 1000000 && nums2 > 100000) {
            res.status(400).send({ "status": "error", "message": "Overflow" })
        }
        res.status(200).send({ "status": "success", "message": "The product of two numbers is", result: nums1 * nums2 })
    } catch (err) {
        res.status(400).send({ "status": "failure", "message": "cannot proceed" })
    }
})

app.post("/division", async (req, res) => {
    try {
        let nums1 = req.body.nums1;
        let nums2 = req.body.nums2;
        if (nums2 === 0) {
            res.status(400).send({ "status": "error", "message": "Cannot divide by zero" })
        }
        if (isNaN(nums1) || isNaN(nums2)) {
            res.status(400).send({ "status": "error", "message": "Invalid Data Type" })
        }
        if (nums1 < -1000000 && nums2 < -100000) {
            res.status(400).send({ "status": "error", "message": "Underflow" })
        }
        if (nums1 > 1000000 && nums2 > 100000) {
            res.status(400).send({ "status": "error", "message": "Overflow" })
        }
        res.status(200).send({ "status": "success", "message": "The division of two numbers is", result: nums1 / nums2 })
    } catch (err) {
        res.status(400).send({ "status": "failure", "message": "cannot proceed" })
    }
})


app.get("/", (req, res) => {
    res.status(200).send("Hello World!!!")
})

app.listen(3003, () => {
    console.log("Server is listening at port 3003");
})