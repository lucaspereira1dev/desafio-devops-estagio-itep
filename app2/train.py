import pandas as pd
from sklearn.ensemble import RandomForestRegressor
import joblib # Biblioteca para salvar/carregar modelos

data = pd.read_csv('data.csv')
x = data.drop('MEDV', axis=1)
y = data['MEDV']

rf_regressor = RandomForestRegressor()
rf_regressor.fit(x, y)

# Salva o modelo treinado em um arquivo
joblib.dump(rf_regressor, 'modelo_casas.joblib')
print("Modelo treinado e salvo com sucesso!")