/* eslint-disable */
const fs = require("fs");
const path = require("path");

let fileCount = 0;

// Root directories to traverse
const rootDirs = ["src"];
const fileExtensions = [".ts", ".tsx"];

const traverseDirAndUpdateFiles = (dir) => {
    if (!fs.existsSync(dir)) {
        // Skip this directory if it doesn't exist
        return;
    }

    const files = fs.readdirSync(dir);

    for (let file of files) {
        const filePath = path.join(dir, file);
        const relativePath = path.relative(__dirname, filePath);
        const newPathComment = `//path: ${relativePath}`;

        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            traverseDirAndUpdateFiles(filePath);
        } else {
            const fileExtension = path.extname(file);
            if (fileExtensions.includes(fileExtension)) {
                let content = fs.readFileSync(filePath, "utf8");

                // Check if the file has a path comment anywhere in it
                const pathCommentIndex = content.indexOf("//path: ");
                if (pathCommentIndex !== -1) {
                    // Find the start of the line with the path comment
                    const lineStart = content.lastIndexOf("\n", pathCommentIndex) + 1;

                    // Find the end of the line with the path comment
                    const lineEnd = content.indexOf("\n", pathCommentIndex);

                    // Remove the line with the path comment
                    content = content.substring(0, lineStart) + content.substring(lineEnd + 1);
                }

                // Remove any leading empty lines or whitespace
                content = content.replace(/^\s*\n*/, "");

                // Add the new path comment
                content = `${newPathComment}\n\n` + content;

                fs.writeFileSync(filePath, content, "utf8");
                fileCount++; // Increment the count of updated files
            }
        }
    }
};

// Traverse each root directory
rootDirs.forEach(dir => {
    const dirPath = path.join(__dirname, dir);
    traverseDirAndUpdateFiles(dirPath);
});

console.log(`Updated ${fileCount} files`);
