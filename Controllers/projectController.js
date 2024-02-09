
const projects = require('../Models/projectSchema');
const { find } = require('../Models/userSchema');
exports.addProject = async (req, res) => {
    console.log("Inside add project controll");
    console.log("getting user id in controlelr");
    const userId = req.payload;
    console.log(userId)
    const projectImage = req.file.filename;
    console.log(projectImage)
    const { title, language, github, website, overview } = req.body;
    try {
        // we can use github link to check whether this project is already uploaded
        const existingProject = await projects.findOne({ github: github })
        if (existingProject) {
            res.status(406).json("Project already exist, upload a new one")
        }
        else {
            const newProject = new projects({
                title: title,
                language: language,
                github: github,
                website: website,
                overview: overview,
                userId: userId,
                projectImage: projectImage
            })
            await newProject.save();
            res.status(200).json(newProject)
        }
    } catch (err) {
        res.status(401).json("Add project request failed due to error", err)
    }
}

exports.getHomeProjects = async (req, res) => {
    try {
        const homeProject = await projects.find().limit(3)
        res.status(200).json(homeProject)
    }
    catch (err) {
        res.status(401).json("Request failed due to errro:", err)
    }
}

exports.getAllProjects = async (req, res) => {
    try {
        const allProject = await projects.find()
        res.status(200).json(allProject)
    }
    catch (err) {
        res.status(401).json("Request failed due to errro:", err)
    }
}

exports.getUserProject = async (req, res) => {
    const userId = req.payload;
    try {
        const allUserProject = await projects.find({ userId: userId });
        res.status(200).json(allUserProject)
    }
    catch (err) {
        res.status(401).json("Request failed due to errro:", err)
    }
}
