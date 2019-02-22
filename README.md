# SSIFWC - WebGIS

This is a WebGIS for the SSIFWC designed to allow users to visualise the data gathered (via Epicollect 5) for the project, along with contextual information including geological maps and hydrological information.


## Deployment

The app is deployed via a publically available S3 bucket.

To prepare the app for a production release build, run:

    npm run build

Then, simply upload the contents of the `/build` folder to the S3 bucket
