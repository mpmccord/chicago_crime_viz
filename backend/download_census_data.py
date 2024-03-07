# Import modules
import matplotlib.pyplot as plt
import pandas as pd
import geopandas as gpd
from census import Census
from us import states
import os
from dotenv import load_dotenv
env_variables = load_dotenv(".env")
c = Census(os.environ.get('CENSUS_API_KEY'))
c.acs5.get(('NAME', 'B25034_010E'),
          {'for': 'state:{}'.format(states.IL.fips)})