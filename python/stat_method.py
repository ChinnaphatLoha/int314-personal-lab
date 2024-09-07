import pandas as pd
from sklearn.preprocessing import MinMaxScaler, LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

# Sample data
data = {'Age': [25, 30, None, 35], 'Salary': [
    50000, 60000, 55000, None], 'City': ['NY', 'LA', 'NY', 'SF']}
df = pd.DataFrame(data)

# Fill missing values
df['Age'].fillna(df['Age'].mean(), inplace=True)
df['Salary'].fillna(df['Salary'].mean(), inplace=True)

# Normalize Salary
scaler = MinMaxScaler()
df['Salary'] = scaler.fit_transform(df[['Salary']])

# Encode City
encoder = LabelEncoder()
df['City'] = encoder.fit_transform(df['City'])

print(df)

# Sample data
X = df[['Age', 'City']]
y = df['Salary']

# Adjust test_size to ensure enough samples in the test set
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.5, random_state=42)

# Train model
model = LinearRegression()
model.fit(X_train, y_train)

# Predict
predictions = model.predict(X_test)

# Evaluate model
print('Mean Squared Error:', mean_squared_error(y_test, predictions))
r2 = r2_score(y_test, predictions)
print('R-squared:', r2)
