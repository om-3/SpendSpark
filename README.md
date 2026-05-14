<div align="center">

# 💸 SpendSpark

### Smart Student Expense & Subscription Tracker
**Track. Analyze. Save Smarter.**

[![Java](https://img.shields.io/badge/Java-JavaFX-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)](https://openjfx.io/)
[![MySQL](https://img.shields.io/badge/MySQL-Database-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Python](https://img.shields.io/badge/Python-Analytics-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

![App Demo](assets/demo.gif)

</div>

---

## 📌 About

**SpendSpark** is a desktop financial tracker built for students who want control over their money — without the complexity.

Log expenses, catch recurring subscription leaks, get renewal reminders, and visualize your spending — all in one dark-mode app powered by Java, MySQL, and Python analytics.

> Built with **MVC architecture** for clean separation of logic, UI, and data.

---

## ✨ Features

| Feature | Description |
|---|---|
| 📊 Expense Tracking | Log daily expenses by category, amount, and date |
| 🔁 Subscription Manager | Track monthly/yearly subscriptions with billing cycles |
| ⚠️ Renewal Alerts | Visual alert when a subscription renews within 3 days |
| 📈 Spending Analytics | Python-generated pie charts & monthly trend graphs |
| 👥 Multi-User Support | Separate profiles per user |
| 💾 MySQL Integration | Persistent local database storage |
| 🐍 Auto Reports | Monthly spending summary printed to console |

---

## 🛠 Tech Stack

```
Frontend   →  JavaFX (Dark Mode UI, MVC Controllers)
Backend    →  Java (Business logic, renewal calculations)
Database   →  MySQL (Users, Expenses, Subscriptions)
Analytics  →  Python + Plotly (Charts exported as HTML/PNG)
```

---

## 🗄 Database Schema

<details>
<summary><strong>Click to expand schema</strong></summary>

### `Users`
| Column | Type |
|--------|------|
| id | INT (PK, AUTO_INCREMENT) |
| name | VARCHAR(100) |
| email | VARCHAR(100) UNIQUE |

### `Expenses`
| Column | Type |
|--------|------|
| id | INT (PK, AUTO_INCREMENT) |
| user_id | INT (FK → Users) |
| category | VARCHAR(50) |
| amount | DECIMAL(10,2) |
| date | DATE |

### `Subscriptions`
| Column | Type |
|--------|------|
| id | INT (PK, AUTO_INCREMENT) |
| user_id | INT (FK → Users) |
| name | VARCHAR(100) |
| cost | DECIMAL(10,2) |
| billing_cycle | ENUM('monthly','yearly') |
| next_renewal_date | DATE |

</details>

---

## ⚙️ Installation

### Prerequisites
- Java 17+ with JavaFX SDK
- MySQL 8.0+
- Python 3.8+ with `plotly` and `mysql-connector-python`

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/om-3/SpendSpark.git
cd SpendSpark

# 2. Setup MySQL database
mysql -u root -p < schema/schema.sql

# 3. Configure DB credentials
# Edit src/config/DBConfig.java with your MySQL credentials

# 4. Open in IntelliJ IDEA (recommended) or VS Code
# Add JavaFX SDK to VM options:
# --module-path /path/to/javafx-sdk/lib --add-modules javafx.controls,javafx.fxml

# 5. Run the JavaFX application
# Run Main.java

# 6. (Optional) Run Python analytics
pip install plotly mysql-connector-python
python analytics/visualize.py
```

---

## 📁 Project Structure

```
SpendSpark/
├── src/
│   ├── controller/        # JavaFX controllers (MVC)
│   ├── model/             # Data models (User, Expense, Subscription)
│   ├── view/              # FXML layout files
│   ├── config/            # DB connection config
│   └── Main.java
├── analytics/
│   └── visualize.py       # Python chart generator
├── schema/
│   └── schema.sql         # MySQL schema
├── assets/
│   └── demo.gif
└── README.md
```

---

## 🚀 Roadmap

- [ ] Cloud sync support
- [ ] Mobile app version (Android)
- [ ] AI-based spending suggestions
- [ ] Budget prediction system
- [ ] CSV/PDF export

---

## 👨‍💻 Author

**OM**

[![GitHub](https://img.shields.io/badge/GitHub-om--3-181717?style=for-the-badge&logo=github)](https://github.com/om-3)
[![Instagram](https://img.shields.io/badge/Instagram-@_om__3.y-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/_om_3.y?igsh=MTA1aWYyYzRpczJueA==)

---

<div align="center">

⭐ **Star this repo if it helped you!** ⭐

*Made with ☕ and late-night debugging sessions*

</div>
