import boto3

s3 = boto3.resource('s3')
for bucket in s3.buckets.all():
    if bucket.name.startswith("webgis"):
        print(bucket.name)
        print(bucket.objects)
        bucket.objects.all().delete()
        bucket.object_versions.delete()
        bucket.delete()




