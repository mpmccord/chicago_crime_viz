import pyspark.sql.functions as F
from pyspark.sql import SparkSession, SQLContext
import pyspark.sql.types as T
import pyspark
spark = SparkSession.builder \
    .master("local") \
    .appName("Time Series") \
    .getOrCreate()
crime_data = spark.read.csv("/Users/melaniemccord/Desktop/GitHub/chicago_crime/data_temp/crimes.csv", header=True)
