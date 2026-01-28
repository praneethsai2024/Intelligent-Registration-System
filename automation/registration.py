from selenium import webdriver
from selenium.webdriver.common.by import By
import time

# Launch Chrome browser
driver = webdriver.Chrome()
driver.maximize_window()

# Open Registration Page (update path if required)
driver.get("file:///C:/Users/pinja/OneDrive/Desktop/Registration_Form/index.html")

print("Page Title:", driver.title)
print("Page URL:", driver.current_url)

time.sleep(2)

# Fill form (Last Name intentionally skipped)
driver.find_element(By.ID, "firstName").send_keys("Praneeth")
driver.find_element(By.ID, "email").send_keys("testuser@gmail.com")
driver.find_element(By.ID, "phone").send_keys("9876543210")

# Select Gender - Male
driver.find_element(By.XPATH, "//input[@name='gender' and @value='Male']").click()

# Enter Passwords
driver.find_element(By.ID, "password").send_keys("Test@123")
driver.find_element(By.ID, "confirmPassword").send_keys("Test@123")

# Accept Terms & Conditions
driver.find_element(By.ID, "terms").click()

time.sleep(1)

# Submit the form
driver.find_element(By.ID, "submitBtn").click()

time.sleep(2)

# Verify Last Name error message
error_text = driver.find_element(By.ID, "lastNameError").text
print("Displayed Error Message:", error_text)

# Capture screenshot
driver.save_screenshot("error-state.png")

# Close browser
driver.quit()
