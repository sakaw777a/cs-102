/* ═══════════════════════════════════════════════════
   C++ Study Hub – script.js (Bilingual Updated)
   ═══════════════════════════════════════════════════ */

// ──────────────────────────────────────────────────
//  HELPER: Syntax Highlight (simple regex-based)
// ──────────────────────────────────────────────────
function hl(code) {
  const keywords = /\b(int|float|double|char|bool|string|void|return|if|else|while|for|do|switch|case|break|default|const|new|struct|using|namespace|include|true|false|endl|cin|cout)\b/g;
  const types    = /\b(int|float|double|char|bool|string|void)\b/g;
  const strings  = /"([^"]*)"/g;
  const comments = /(\/\/.*)/g;
  const numbers  = /\b(\d+\.?\d*)\b/g;
  const funcs    = /\b([a-zA-Z_]\w*)\s*(?=\()/g;

  let h = code
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

  h = h.replace(comments,   '<span class="cm">$1</span>');
  h = h.replace(strings,    '<span class="st">"$1"</span>');
  h = h.replace(keywords,   '<span class="kw">$1</span>');
  h = h.replace(funcs,      '<span class="fn">$1</span>');
  h = h.replace(numbers,    '<span class="nm">$1</span>');
  return h;
}

// ──────────────────────────────────────────────────
//  DATA – All examples from the PDF (Bilingual)
// ──────────────────────────────────────────────────
const SECTIONS = [
  {
    id: 'variables',
    name: 'Variables & I/O',
    icon: '📦',
    cards: [
      {
        id: 'v1',
        title: `مثال ١ – طباعة بيانات شخصية (بدون إدخال) <br><span style="font-size:0.8em; opacity:0.75; display:block; margin-top:4px;">Example 1 – Printing personal data (without input)</span>`,
        tags: ['basic','exam'],
        idea: `<strong>The idea:</strong> We define variables of different types (int, string, char, bool) and print them directly using <code>cout</code>. Note that bool prints 1 if true and 0 if false.
        <hr style="border:none; border-top:1px dashed rgba(255,255,255,0.15); margin:8px 0;">
        <strong>الفكرة:</strong> نعرف متغيرات بأنواع مختلفة (int, string, char, bool) ونطبعها مباشرة بـ <code>cout</code>. لاحظ إن bool بيطبع 1 لو true و 0 لو false.`,
        hint: `Use cout << variable << endl for each line. Try changing the bool value and see the result! <br><span style="display:block; margin-top:4px; opacity:0.8;">استخدم cout << متغير << endl لكل سطر. جرب تغير قيمة bool وتشوف النتيجة!</span>`,
        code:
`#include <iostream>
using namespace std;

int main() {
    int age = 18;
    string name = "Ahmed";
    char surname_first_letter = 'M';
    bool student = true;

    cout << "Age= " << age << endl;
    cout << "Name= " << name << endl;
    cout << "surname_first_letter= " << surname_first_letter << endl;
    cout << "Student= " << student << endl;

    return 0;
}`,
        output: `Age= 18\nName= Ahmed\nsurname_first_letter= M\nStudent= 1`,
        explanation: [
          'int age = 18  → Allocates space in memory for an integer / يحجز مكان في الذاكرة لرقم صحيح',
          'string name = "Ahmed"  → Text, must use double quotes / نص، لازم double quotes',
          'char  → Single character between single quotes / حرف واحد بين single quotes',
          'bool student = true  → Prints 1 because true = 1 in C++ / يُطبع 1 لأن true = 1 في C++',
          'endl  → Ends the line and goes to a new line / ينتهي السطر ويروح لسطر جديد'
        ]
      },
      {
        id: 'v2',
        title: `مثال ٢ – إدخال بيانات من المستخدم (cin) <br><span style="font-size:0.8em; opacity:0.75; display:block; margin-top:4px;">Example 2 – User data input (cin)</span>`,
        tags: ['basic','exam'],
        idea: `<strong>The idea:</strong> Same as the previous example, but instead of specifying values inside the code, we request them from the user using <code>cin</code>.
        <hr style="border:none; border-top:1px dashed rgba(255,255,255,0.15); margin:8px 0;">
        <strong>الفكرة:</strong> نفس المثال السابق لكن بدل ما نحدد القيم داخل الكود، نطلبها من المستخدم باستخدام <code>cin</code>.`,
        hint: `cin >> variable  ← reads from keyboard. If you have more than one variable: cin >> x >> y <br><span style="display:block; margin-top:4px; opacity:0.8;">cin >> متغير  ← يقرأ من لوحة المفاتيح. لو عندك أكتر من متغير تقدر تكتب: cin >> x >> y</span>`,
        code:
`#include <iostream>
using namespace std;

int main() {
    int age = 18;
    string name = "Ahmed";
    char surname_first_letter = 'M';
    bool student = true;

    cout << "Enter your Age= ";
    cin >> age;
    cout << "Enter your Name= ";
    cin >> name;
    cout << "Enter your surname_first_letter= ";
    cin >> surname_first_letter;
    cout << "Are you Student= ";
    cin >> student;

    cout << "----------------Your Data------------" << endl;
    cout << "Age= " << age << endl;
    cout << "Name= " << name << endl;
    cout << "surname_first_letter= " << surname_first_letter << endl;
    cout << "Student= " << student << endl;

    return 0;
}`,
        output: `Enter your Age= 20\nEnter your Name= Sara\nEnter your surname_first_letter= A\nAre you Student= 1\n----------------Your Data------------\nAge= 20\nName= Sara\nsurname_first_letter= A\nStudent= 1`,
        explanation: [
          'cin >>  → Reads user input and stores it in the variable / يقرأ إدخال المستخدم ويخزنه في المتغير',
          'Input order matters – each cin reads one value / ترتيب الإدخال مهم – كل cin يقرأ قيمة واحدة',
          'To clarify what to enter, use cout before cin / عشان توضح للمستخدم يدخل إيه استخدم cout قبل cin',
          'The line separator (dashboard) improves output clarity / الفاصل السطري (دشبورد) يُحسّن وضوح الـ Output'
        ]
      }
    ]
  },

  {
    id: 'operators',
    name: 'Operators',
    icon: '🔢',
    cards: [
      {
        id: 'op1',
        title: `تمرين ١ – العمليات الحسابية الخمس <br><span style="font-size:0.8em; opacity:0.75; display:block; margin-top:4px;">Exercise 1 – The Five Arithmetic Operations</span>`,
        tags: ['exam','imp'],
        idea: `<strong>The idea:</strong> We read two integers and calculate: addition, subtraction, multiplication, integer division, and modulus. Importantly, dividing integers truncates the decimal.
        <hr style="border:none; border-top:1px dashed rgba(255,255,255,0.15); margin:8px 0;">
        <strong>الفكرة:</strong> نقرأ عددين صحيحين ونحسب: الجمع، الطرح، الضرب، القسمة الصحيحة، والباقي (Modulus). المهم إن القسمة على integers بتدي integer (بتقطع الكسر).`,
        hint: `For division to result in a decimal, the variable must be float/double. Here they are int, so it\'s integer division. <br><span style="display:block; margin-top:4px; opacity:0.8;">عشان القسمة تطلع بالكسر لازم المتغير يكون float أو double. هنا الأرقام int فالقسمة integer division.</span>`,
        code:
`#include <iostream>
using namespace std;

int main() {
    int num1, num2;
    int sum, sub, mul, divis, mod;

    cout << "Enter num1= ";
    cin >> num1;
    cout << "Enter num2= ";
    cin >> num2;

    sum   = num1 + num2;
    sub   = num1 - num2;
    mul   = num1 * num2;
    divis = num1 / num2;
    mod   = num1 % num2;

    cout << "----------------Your Calculation------------" << endl;
    cout << "Sum= "          << sum   << endl;
    cout << "Sub= "          << sub   << endl;
    cout << "Multiplication= " << mul << endl;
    cout << "Division= "     << divis << endl;
    cout << "Modulus= "      << mod   << endl;

    return 0;
}`,
        output: `Enter num1= 10\nEnter num2= 7\n----------------Your Calculation------------\nSum= 17\nSub= 3\nMultiplication= 70\nDivision= 1\nModulus= 3`,
        explanation: [
          '+, -, *  → Normal operations / عمليات عادية',
          '/  → On integers gives an integer result only (10/7 = 1) / على integers تعطي ناتج صحيح فقط (10/7 = 1)',
          '%  → The remainder of division (10 % 7 = 3) / الباقي من القسمة (10 % 7 = 3)',
          '% does not work on float or double / % لا يعمل على float أو double',
          'Multiple variables can be declared in one line: int sum, sub; / يمكن إعلان أكتر من متغير في سطر: int sum, sub, mul;'
        ]
      }
    ]
  },

  {
    id: 'conditionals',
    name: 'Conditionals & Switch',
    icon: '🔀',
    cards: [
      {
        id: 'c1',
        title: `مثال ٦ – تصنيف الموظف (if / else if / else) <br><span style="font-size:0.8em; opacity:0.75; display:block; margin-top:4px;">Example 6 – Employee Classification (if / else if / else)</span>`,
        tags: ['exam','imp'],
        idea: `<strong>The idea:</strong> We use if-else if-else to classify an employee based on experience. Newcomer ≤ 1 year, Junior > 1 and ≤ 3, Senior > 3.
        <hr style="border:none; border-top:1px dashed rgba(255,255,255,0.15); margin:8px 0;">
        <strong>الفكرة:</strong> نستخدم if-else if-else لتصنيف الموظف حسب سنوات الخبرة. Newcomer ≤ 1 سنة، Junior > 1 و ≤ 3، Senior > 3.`,
        hint: `Pay attention to the order of conditions! If reversed, it might enter the wrong block. Mind zero or negative values. <br><span style="display:block; margin-top:4px; opacity:0.8;">انتبه لترتيب الشروط! لو عكست الترتيب ممكن يدخل في شرط غلط. وخلي بالك من حالة الصفر أو الأرقام السالبة.</span>`,
        code:
`#include <iostream>
#include <string>
using namespace std;

int main() {
    double yearsExperience;
    cout << "Enter years of experience: ";
    cin >> yearsExperience;

    if (yearsExperience > 0 && yearsExperience <= 1.0) {
        cout << "Employee is a Newcomer" << endl;
    } else if (yearsExperience > 1 && yearsExperience <= 3.0) {
        cout << "Employee is a Junior" << endl;
    } else if (yearsExperience > 3) {
        cout << "Employee is a Senior" << endl;
    } else {
        cout << "Year of Experience is negative or zero" << endl;
    }

    return 0;
}`,
        output: `Enter years of experience: 1.5\nEmployee is a Junior`,
        explanation: [
          '&&  → AND – Both conditions must be true together / الشرطين لازم يتحققوا مع بعض',
          'double  → Supports decimal numbers like 1.5 / يدعم الأعداد العشرية زي 1.5',
          'else if  → Only evaluated if the preceding if failed / يُفحص بس لو الـ if اللي قبله فشل',
          'Final else  → Represents unexpected cases (Validation) / الأخير يمثل الحالات غير المتوقعة (Validation)',
          'Evaluation order is very important in if-else if / ترتيب الفحص مهم جداً في if-else if'
        ]
      },
      {
        id: 'c2',
        title: `مثال ٧ – أيام الأسبوع (switch) <br><span style="font-size:0.8em; opacity:0.75; display:block; margin-top:4px;">Example 7 – Days of the Week (switch)</span>`,
        tags: ['exam','trick'],
        idea: `<strong>The idea:</strong> switch is a cleaner alternative to if-else if when checking a single value against fixed cases. Each case must end with a break to avoid fall-through.
        <hr style="border:none; border-top:1px dashed rgba(255,255,255,0.15); margin:8px 0;">
        <strong>الفكرة:</strong> switch بديل أنظف لـ if-else if لما تفحص قيمة واحدة بحالات ثابتة. كل case لازم تنتهي بـ break عشان ما ينزلش للـ case اللي بعدها.`,
        hint: `If you forget break, the code will continue executing the case below it (Fall-through). This could be intentional or a bug! <br><span style="display:block; margin-top:4px; opacity:0.8;">لو نسيت break، الكود هيكمل ينفذ الـ case اللي تحيه (Fall-through). ده ممكن يبقى bug أو ممكن يبقى مقصود!</span>`,
        code:
`#include <iostream>
using namespace std;

int main() {
    int dayNumber;
    cout << "Enter day number (1-7): ";
    cin >> dayNumber;

    switch (dayNumber) {
        case 1:
            cout << "Saturday" << endl;
            break;
        case 2:
            cout << "Sunday" << endl;
            break;
        case 3:
            cout << "Monday" << endl;
            break;
        case 4:
            cout << "Tuesday" << endl;
            break;
        case 5:
            cout << "Wednesday" << endl;
            break;
        case 6:
            cout << "Thursday" << endl;
            break;
        case 7:
            cout << "Friday" << endl;
            break;
        default:
            cout << "Invalid day number!" << endl;
    }

    return 0;
}`,
        output: `Enter day number (1-7): 3\nMonday`,
        explanation: [
          'switch(x)  → Evaluates x and branches to the matching case / يفحص قيمة x ويروح للـ case المناسبة',
          'break  → Critical! Prevents execution from rolling into the next case / مهم جداً! بيمنع التنفيذ يكمل للـ case التالية',
          'default  → Runs if no case matches (acts like else) / بيتنفذ لو ما انطبقش أي case (زي else)',
          'switch works with int and char types only (not string) / switch يشتغل مع int, char فقط (مش string)',
          'Faster and cleaner than if-else if for multiple fixed conditions / أسرع وأوضح من if-else if لما الحالات كتيرة وثابتة'
        ]
      },
      {
        id: 'c3',
        title: `Ternary Operator – فردي أم زوجي؟ <br><span style="font-size:0.8em; opacity:0.75; display:block; margin-top:4px;">Ternary Operator – Even or Odd?</span>`,
        tags: ['trick','imp'],
        idea: `<strong>The idea:</strong> Ternary Operator is if-else compressed into a single line. Formula: <code>condition ? value_if_true : value_if_false</code>. Perfect for simple assignments.
        <hr style="border:none; border-top:1px dashed rgba(255,255,255,0.15); margin:8px 0;">
        <strong>الفكرة:</strong> Ternary Operator هو if-else في سطر واحد. الصيغة: <code>condition ? value_if_true : value_if_false</code>. مفيد جداً للحالات البسيطة.`,
        hint: `num % 2 == 0 means the number is divisible by 2. If the remainder is 0 → Even, otherwise → Odd. <br><span style="display:block; margin-top:4px; opacity:0.8;">num % 2 == 0 يعني الرقم قابل للقسمة على 2 → زوجي. لو باقي القسمة = 0 → even, غير كده → odd.</span>`,
        code:
`#include <iostream>
#include <string>
using namespace std;

int main() {
    int num;
    cout << "Enter a number: ";
    cin >> num;

    string result = (num % 2 == 0) ? "Even" : "Odd";

    cout << "The number is: " << result << endl;

    return 0;
}`,
        output: `Enter a number: 10\nThe number is: Even\n\nEnter a number: 5\nThe number is: Odd`,
        explanation: [
          '(condition) ? A : B  → If condition is true → A, else → B / لو الشرط صح → A، لو غلط → B',
          'num % 2 == 0  → Checks if the remainder of division by 2 is zero / يتحقق إن الباقي من القسمة على 2 يساوي صفر',
          'Result saved in a string because "Even"/"Odd" are text / النتيجة محفوظة في string result  ← نوعها string لأن "Even" و "Odd" نصوص',
          'Ternary is faster to write than if-else for simple logic / Ternary أسرع في الكتابة من if-else للحالات البسيطة'
        ]
      },
      {
        id: 'c4',
        title: `Logical Operators – دخول السينما (AND) <br><span style="font-size:0.8em; opacity:0.75; display:block; margin-top:4px;">Logical Operators – Cinema Admission (AND)</span>`,
        tags: ['exam','imp'],
        idea: `<strong>The idea:</strong> We use && (AND) to verify two conditions simultaneously: age must be greater than 18 <strong>and additionally</strong> cash must be greater than or equal to $20.
        <hr style="border:none; border-top:1px dashed rgba(255,255,255,0.15); margin:8px 0;">
        <strong>الفكرة:</strong> نستخدم && (AND) للتحقق من شرطين معاً: العمر أكبر من 18 <strong>وبالإضافة</strong> الكاش أكبر من أو يساوي 20$.`,
        hint: `&& means both must be true. || (OR) means one true condition is enough. ! (NOT) flips the statement. <br><span style="display:block; margin-top:4px; opacity:0.8;">&& يعني الشرطين لازم يكونوا صح مع بعض. || (OR) يعني يكفي شرط واحد. ! (NOT) يعكس الشرط.</span>`,
        code:
`#include <iostream>
using namespace std;

int main() {
    int age, cash;
    cout << "Enter your age: ";
    cin >> age;
    cout << "Enter how much cash you have (in dollars): $";
    cin >> cash;

    if ((age > 18) && (cash >= 20))
        cout << "\\nAccess Granted! You can enter the Cinema." << endl;
    else
        cout << "\\nAccess Denied. You cannot enter the Cinema." << endl;

    return 0;
}`,
        output: `Enter your age: 20\nEnter how much cash you have (in dollars): $25\n\nAccess Granted! You can enter the Cinema.`,
        explanation: [
          '&&  → AND: All distinct conditions must be true / كل الشروط لازم تتحقق',
          '||  → OR: At least one condition must be true / يكفي شرط واحد يتحقق',
          '!   → NOT: Inverts the boolean value / يعكس قيمة الشرط',
          'You can chain logical operators: (a && b) || c / ممكن تدمج الـ Logical Operators: (a && b) || c',
          '\\n  → Escaped character to print a blank line / سطر جديد داخل النص (Escape Sequence)'
        ]
      },
      {
        id: 'c5',
        title: `Logical Operators – شحن مجاني (OR) <br><span style="font-size:0.8em; opacity:0.75; display:block; margin-top:4px;">Logical Operators – Free Shipping (OR)</span>`,
        tags: ['exam'],
        idea: `<strong>The idea:</strong> We use || (OR) to verify two conditions: either order total > $50 <strong>or</strong> Premium membership status. Any single matching condition grants free shipping.
        <hr style="border:none; border-top:1px dashed rgba(255,255,255,0.15); margin:8px 0;">
        <strong>الفكرة:</strong> نستخدم || (OR) للتحقق من شرطين: إما إجمالي الطلب > 50$ <strong>أو</strong> العضوية Premium. يكفي شرط واحد منهم.`,
        hint: `Here we read a string for membership and compare it using == "yes". Ensure #include <string> is loaded. <br><span style="display:block; margin-top:4px; opacity:0.8;">هنا نقرأ string للعضوية ونقارنها بـ == "yes". تأكد إن الـ string #include ضروري.</span>`,
        code:
`#include <iostream>
using namespace std;

int main() {
    double order_total;
    string member_status;

    cout << "Order total: $";
    cin >> order_total;

    cout << "Premium member? (yes/no): ";
    cin >> member_status;

    if ((order_total > 50.00) || (member_status == "yes"))
        cout << "FREE SHIPPING." << endl;
    else
        cout << "Standard shipping applies." << endl;

    return 0;
}`,
        output: `Order total: $30\nPremium member? (yes/no): yes\nFREE SHIPPING.`,
        explanation: [
          '||  → OR: Only one true condition is required / يكفي شرط واحد صح',
          'member_status == "yes"  → Evaluation of strings with == / مقارنة string بـ ==',
          'double order_total  → Variable that accepts fractions / يدعم أرقام كسرية',
          'Condition order with || doesn\'t impact the check (unlike &&) / ترتيب الشروط مع || مش مهم (بعكس &&)'
        ]
      },
      {
        id: 'c6',
        title: `Logical Operators – غرفة الاجتماعات (NOT) <br><span style="font-size:0.8em; opacity:0.75; display:block; margin-top:4px;">Logical Operators – Meeting Room (NOT)</span>`,
        tags: ['trick'],
        idea: `<strong>The idea:</strong> We use ! (NOT) to flip a condition. We parse a "yes/no" string into a bool, and print availability only if the room is <em>not</em> booked.
        <hr style="border:none; border-top:1px dashed rgba(255,255,255,0.15); margin:8px 0;">
        <strong>الفكرة:</strong> نستخدم ! (NOT) لعكس الشرط. نقرأ string "yes/no" ونحوله لـ bool، ثم نطبع لو الغرفة <em>مش</em> محجوزة.`,
        hint: `! inverts values: !true = false, !false = true. evaluates status_input == "yes" directly into a boolean. <br><span style="display:block; margin-top:4px; opacity:0.8;">! يعكس القيمة: !true = false, !false = true. bool is_booked = (status_input == "yes") هي طريقة ذكية لتحويل النص لـ bool.</span>`,
        code:
`#include <iostream>
using namespace std;

int main() {
    string status_input;
    cout << "Is the meeting room currently Booked? (yes/no): ";
    cin >> status_input;

    bool is_booked = (status_input == "yes");

    if (!is_booked)
        cout << "The room is AVAILABLE." << endl;
    else
        cout << "The room is BOOKED." << endl;

    return 0;
}`,
        output: `Is the meeting room currently Booked? (yes/no): no\nThe room is AVAILABLE.`,
        explanation: [
          'bool is_booked = (status_input == "yes")  → Converts expression directly to boolean / يحوّل النص لـ bool مباشرة',
          '!is_booked  → If is_booked is false, !false results in true / لو is_booked = false → !false = true → ندخل الـ if',
          'Cleaner than comparing string input expressions twice / أفضل من مقارنة string مرتين في الشرط',
          'This paradigm is common for verifying binary boolean flags / النمط ده شائع في فحص أعلام (flags) الـ boolean'
        ]
      }
    ]
  },

  {
    id: 'loops',
    name: 'Loops',
    icon: '🔁',
    cards: [
      {
        id: 'l1',
        title: `مثال – جمع 4 أعداد بـ for loop <br><span style="font-size:0.8em; opacity:0.75; display:block; margin-top:4px;">Example – Summing 4 Numbers with a for loop</span>`,
        tags: ['exam','basic'],
        idea: `<strong>The idea:</strong> A for loop repeats a tracking block a fixed number of times. Here we iterate 4 times, prompt for a number, and accumulate it into sum.
        <hr style="border:none; border-top:1px dashed rgba(255,255,255,0.15); margin:8px 0;">
        <strong>الفكرة:</strong> for loop يكرر الكود عدد معين من المرات. هنا نكرر 4 مرات، كل مرة نطلب رقم ونضيفه للـ sum.`,
        hint: `sum += number is shorthand for sum = sum + number. The accumulator must be preset to 0 before looping. <br><span style="display:block; margin-top:4px; opacity:0.8;">sum += number  ←  هي اختصار لـ sum = sum + number. المتغير sum لازم يتبدأ بصفر قبل الـ loop.</span>`,
        code:
`#include <iostream>
using namespace std;

int main() {
    int number, sum = 0;

    for (int i = 1; i <= 4; i++) {
        cout << "Enter an integer = ";
        cin >> number;
        sum += number;
        cout << endl;
    }

    cout << "The sum of the 4 integers is: " << sum << endl;

    return 0;
}`,
        output: `Enter an integer = 1\nEnter an integer = 2\nEnter an integer = 3\nEnter an integer = 4\nThe sum of the 4 integers is: 10`,
        explanation: [
          'for (init; condition; update)  → Core standard syntax structure / الصيغة الأساسية',
          'int i = 1  → Set tracking index starting at 1 / نبدأ من 1',
          'i <= 4  → Keep iterating until index surpasses 4 / نكمل لحد ما i تتجاوز 4',
          'i++  → Increments tracking index by 1 after each loop cycle / نزيد i بواحد بعد كل دورة',
          'sum = 0  → Critical initialization to prevent garbage values / ضروري نبدأ بصفر عشان الجمع يبقى صح'
        ]
      }
    ]
  },

  {
    id: 'functions',
    name: 'Functions',
    icon: '🧩',
    cards: [
      {
        id: 'f1',
        title: `مثال ٢ – void function: جمع عددين <br><span style="font-size:0.8em; opacity:0.75; display:block; margin-top:4px;">Example 2 – void function: Sum of Two Numbers</span>`,
        tags: ['basic','exam'],
        idea: `<strong>The idea:</strong> A void function does not output/return any values. Instead of polluting main, we encapsulate logic inside a separate function block and execute it.
        <hr style="border:none; border-top:1px dashed rgba(255,255,255,0.15); margin:8px 0;">
        <strong>الفكرة:</strong> void function لا تُرجع قيمة. بدل ما نكتب الكود مباشرة في main، نحطه في function مستقلة ونستدعيها.`,
        hint: `void means "returns nothing". To output a value, substitute void with data types (int, float...) and use return. <br><span style="display:block; margin-top:4px; opacity:0.8;">void تعني "لا تُرجع شيء". لو أردنا نُرجع قيمة، نستبدل void بنوع البيانات (int, float...) ونكتب return.</span>`,
        code:
`#include <iostream>
using namespace std;

void sum() {
    cout << "Enter two numbers, separated by a space: ";
    int num1, num2;
    cin >> num1 >> num2;
    int total = num1 + num2;
    cout << "The summation of the two numbers is: " << total << endl;
}

int main() {
    sum();
    return 0;
}`,
        output: `Enter two numbers, separated by a space: \n10\n20\nThe summation of the two numbers is: 30`,
        explanation: [
          'void sum()  → Declaring custom routine block with void type / تعريف الـ function، void = لا تُرجع شيء',
          'sum();  → Instructing main to invoke and run the routine / استدعاء الـ function من main',
          'cin >> num1 >> num2  → Reads two sequential variables separated by space / يقرأ رقمين مفصولين بمسافة',
          'Benefit: Maximizes modular engineering and code recycling / الفائدة: نعيد استخدام الكود بدون تكرار (Reusability)'
        ]
      },
      {
        id: 'f2',
        title: `مثال ٣ – int function: أصغر 3 أرقام <br><span style="font-size:0.8em; opacity:0.75; display:block; margin-top:4px;">Example 3 – int function: Smallest of 3 Numbers</span>`,
        tags: ['exam','imp'],
        idea: `<strong>The idea:</strong> A function configured to return an integer value. We pipe 3 independent integers as input parameters and extract the minimum using if-else statements.
        <hr style="border:none; border-top:1px dashed rgba(255,255,255,0.15); margin:8px 0;">
        <strong>الفكرة:</strong> function تُرجع قيمة int. نمرر 3 أرقام كـ parameters ونرجع الأصغر باستخدام if-else.`,
        hint: `int min(int a, int b, int c)  ← Variables needed inside brackets are parameters. The evaluated answer returns to caller via return statement. <br><span style="display:block; margin-top:4px; opacity:0.8;">int min(int a, int b, int c)  ← البيانات اللي الـ function محتاجها تتحط في القوسين (parameters). القيمة اللي بترجعها تكتب بعد return.</span>`,
        code:
`#include <iostream>
using namespace std;

int min(int a, int b, int c) {
    if (a < b && a < c)
        return a;
    else if (b < a && b < c)
        return b;
    else
        return c;
}

int main() {
    int num1, num2, num3;
    cout << "Please enter three numbers:" << endl;
    cin >> num1 >> num2 >> num3;
    cout << "The smallest number is: " << min(num1, num2, num3) << endl;
    return 0;
}`,
        output: `Please enter three numbers:\n10\n-10\n0\nThe smallest number is: -10`,
        explanation: [
          'int min(...)  → Specifies returned output matches int / نوع الـ return هو int',
          'return a;  → Dispatches valuation back and terminates function lifecycle / يُرجع قيمة a ويوقف تنفيذ الـ function',
          'Parameters: a, b, c  → Stand-in receptors awaiting active variables / يستقبلون القيم عند الاستدعاء',
          'Arguments: num1, num2, num3  → Concrete values forwarded during execution / القيم الفعلية اللي بنمررها'
        ]
      },
      {
        id: 'f3',
        title: `مثال ٥ – جمع الأعداد 1 إلى N (float function) <br><span style="font-size:0.8em; opacity:0.75; display:block; margin-top:4px;">Example 5 – Sum of All Numbers 1 to N (float function)</span>`,
        tags: ['imp'],
        idea: `<strong>The idea:</strong> Writing a float routine that tracks and sums numerical elements from 1 through N. We utilize a localized counting for loop inside the subprogram block.
        <hr style="border:none; border-top:1px dashed rgba(255,255,255,0.15); margin:8px 0;">
        <strong>الفكرة:</strong> نكتب float function تحسب مجموع الأرقام من 1 لحد رقم يدخله المستخدم. نستخدم for loop داخل الـ function.`,
        hint: `return total; dispatches result back to main. float finalSum = sum(num); assigns that value to a tracking variable. <br><span style="display:block; margin-top:4px; opacity:0.8;">return total;  ← بيرجع الناتج للـ main. float finalSum = sum(num);  ← بنخزن الناتج في متغير جديد.</span>`,
        code:
`#include <iostream>
using namespace std;

float sum(float maxNumber) {
    int total = 0;
    for (int i = 1; i <= maxNumber; ++i) {
        total = total + i;
    }
    return total;
}

int main() {
    cout << "Enter a positive number: ";
    float num;
    cin >> num;
    if (num < 1) {
        cout << "Please enter a positive integer greater than 0." << endl;
        return 1;
    }
    float finalSum = sum(num);
    cout << "The sum of all numbers from 1 to " << num << " is: " << finalSum << endl;
    return 0;
}`,
        output: `Enter a positive number: 10\nThe sum of all numbers from 1 to 10 is: 55`,
        explanation: [
          'float sum(float maxNumber)  → Handles single input container marked as float / parameter واحد من نوع float',
          'return total;  → Passes evaluated payload directly to caller expression / يُرجع الناتج للكود اللي استدعى الـ function',
          'return 1;  → Returning nonzero within main flags runtime failure / في main يعني الخروج بـ error code',
          'Prefacing logic with validation constraints prevents pipeline errors / التحقق من الإدخال (Validation) قبل استدعاء الـ function أفضل'
        ]
      },
      {
        id: 'f4',
        title: `مثال ٦ – Prototype & أربع دوال (add, sub, mul, div) <br><span style="font-size:0.8em; opacity:0.75; display:block; margin-top:4px;">Example 6 – Prototype & Four Functions (add, sub, mul, div)</span>`,
        tags: ['exam','imp'],
        idea: `<strong>The idea:</strong> Prototype = An advance blueprint declaration of subprograms ahead of main so the compiler resolves signatures early. Complete blocks reside below main.
        <hr style="border:none; border-top:1px dashed rgba(255,255,255,0.15); margin:8px 0;">
        <strong>الفكرة:</strong> Prototype = تعريف مسبق للـ function قبل main عشان الـ compiler يعرفها. بعدين نكتب الـ function definition بعد main.`,
        hint: `Prototypes require signatures, data properties, and names without a functional code block body: int add(int, int); <br><span style="display:block; margin-top:4px; opacity:0.8;">الـ Prototype بيحتاج فقط النوع والأسماء بدون body: int add(int, int); أو int add(int a, int b);</span>`,
        code:
`#include <iostream>
using namespace std;

// Prototypes
int add(int, int);
int sub(int, int);
int mul(int, int);
float div(float, float);

int main() {
    cout << "Enter two numbers, separated by a space: ";
    float num1, num2;
    cin >> num1 >> num2;

    int sum        = add(num1, num2);
    int difference = sub(num1, num2);
    int product    = mul(num1, num2);
    float quotient = div(num1, num2);

    cout << "Addition result (int): "        << sum        << endl;
    cout << "Subtraction result (int): "     << difference << endl;
    cout << "Multiplication result (int): "  << product    << endl;
    cout << "Division result (float): "      << quotient   << endl;

    return 0;
}

int add(int a, int b)         { return a + b; }
int sub(int a, int b)         { return a - b; }
int mul(int a, int b)         { return a * b; }
float div(float a, float b)   { return a / b; }`,
        output: `Enter two numbers, separated by a space: 20 10\nAddition result (int): 30\nSubtraction result (int): 10\nMultiplication result (int): 200\nDivision result (float): 2`,
        explanation: [
          'Prototype: int add(int, int);  → Signals configuration structure prior to execution body checks / يخبر الـ compiler بنوع الـ function قبل ما يشوف الـ body',
          'The definition implementation map sits beneath main or separate sheets / الـ definition يجي بعد main أو في ملف منفصل',
          'float div  → Return configuration parameters are governed strictly by the function signature / نوع الـ return يتحدد بالـ function مش بالـ caller',
          'Breaking large source structures into independent components is called Decomposition / تقسيم البرنامج لـ functions صغيرة يسمى Decomposition'
        ]
      },
      {
        id: 'f5',
        title: `مثال – Call by Reference (swap بالمرجع) <br><span style="font-size:0.8em; opacity:0.75; display:block; margin-top:4px;">Example – Call by Reference (swap by reference)</span>`,
        tags: ['trick','exam'],
        idea: `<strong>The idea:</strong> Instead of executing logic on replicated clone values (call by value), you feed <strong>the authentic variable memory location</strong> via &. Structural overrides persist inside parent objects.
        <hr style="border:none; border-top:1px dashed rgba(255,255,255,0.15); margin:8px 0;">
        <strong>الفكرة:</strong> بدل ما تمرر نسخة من المتغير (call by value)، تمرر <strong>المتغير نفسه</strong> باستخدام &. أي تعديل داخل الـ function يتأثر بيه المتغير الأصلي.`,
        hint: `& symbol inside a variable parameter array specifies an attached memory reference address. Without it, standard copies are formed. <br><span style="display:block; margin-top:4px; opacity:0.8;">& في تعريف الـ parameter يعني "مرجع". بدون & = نسخة (أي تغيير داخل الـ function ما يأثرش في الأصلي).</span>`,
        code:
`#include <iostream>
using namespace std;

void swap(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int x, y;
    cout << "Please enter two values: \\n";
    cin >> x >> y;
    cout << "Before swap: x = " << x << ", y = " << y << endl;
    swap(x, y);
    cout << "After swap:  x = " << x << ", y = " << y << endl;
    return 0;
}`,
        output: `Please enter two values:\n10\n20\nBefore swap: x = 10, y = 20\nAfter swap:  x = 20, y = 10`,
        explanation: [
          'int &a  → Address marker signaling original memory connection, not a clone copy / & يعني "مرجع" – نفس المتغير مش نسخة منه',
          'int temp = a;  → Preserves data cache locally inside temporary variables during transformation / نحفظ a مؤقتاً عشان ما نفقدش',
          'Omitting the memory references defaults to local copy manipulation, breaking swap / بدون & الـ swap ما هيشتغلش لأنه يعمل على نسخ',
          'Call by Reference patterns speed up execution on dense data structures / Call by Reference أسرع للبيانات الكبيرة (array, struct)'
        ]
      },
      {
        id: 'f6',
        title: `مثال – Call by Reference بالـ Pointers <br><span style="font-size:0.8em; opacity:0.75; display:block; margin-top:4px;">Example – Call by Reference using Pointers</span>`,
        tags: ['trick'],
        idea: `<strong>The idea:</strong> Emulates standard swap logic utilizing memory variables called Pointers (*). Pointers store structural coordinates, using * to query data directly.
        <hr style="border:none; border-top:1px dashed rgba(255,255,255,0.15); margin:8px 0;">
        <strong>الفكرة:</strong> نفس فكرة الـ swap لكن باستخدام Pointers (*). الـ pointer يخزن عنوان المتغير في الذاكرة، و * للوصول للقيمة في ذلك العنوان.`,
        hint: `& alongside initialized standard variables yields exact coordinates. * accesses the value at that address. <br><span style="display:block; margin-top:4px; opacity:0.8;">& أمام متغير موجود = عنوانه في الذاكرة. * أمام pointer = القيمة المخزنة في العنوان اللي الـ pointer بيشاور عليه.</span>`,
        code:
`#include <iostream>
using namespace std;

void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x, y;
    cout << "Please enter two values: \\n";
    cin >> x >> y;
    int *ptr1 = &x, *ptr2 = &y;
    cout << "Before swap: x = " << x << ", y = " << y << endl;
    swap(ptr1, ptr2);
    cout << "After swap:  x = " << x << ", y = " << y << endl;
    return 0;
}`,
        output: `Please enter two values:\n10\n20\nBefore swap: x = 10, y = 20\nAfter swap:  x = 20, y = 10`,
        explanation: [
          'int* a  → Allocates specific pointer tracking space targeting integer values / pointer لـ int',
          '*a  → Dereference syntax: Pierces address layout to alter the payload data / Dereference: الوصول للقيمة في العنوان اللي a بيشاور عليه',
          '&x  → Queries the absolute physical coordinate reference inside the hardware sheets / عنوان المتغير x في الذاكرة',
          'int *ptr1 = &x;  → Binds pointer location directly to variable tracking lanes / ptr1 بيشاور على نفس مكان x'
        ]
      },
      {
        id: 'f7',
        title: `مثال – Default Parameters (مساحة المستطيل) <br><span style="font-size:0.8em; opacity:0.75; display:block; margin-top:4px;">Example – Default Parameters (Rectangle Area)</span>`,
        tags: ['trick','imp'],
        idea: `<strong>The idea:</strong> Predefining standardized fallback assignments inside function templates. If standard parameters are omitted at call sites, alternative fallback defaults handle execution.
        <hr style="border:none; border-top:1px dashed rgba(255,255,255,0.15); margin:8px 0;">
        <strong>الفكرة:</strong> ممكن نحدد قيم افتراضية للـ parameters. لو المستخدم ما مررش قيمة، الـ function تستخدم القيمة الافتراضية.`,
        hint: `Fallback parameters must align from right to left structurally (cannot drop variables in middle lanes). <br><span style="display:block; margin-top:4px; opacity:0.8;">القيم الافتراضية لازم تكون من آخر يمين إلى آخر يسار (لا يمكن تخطي parameter في المنتصف).</span>`,
        code:
`#include <iostream>
using namespace std;

int calculateArea(int length = 1, int width = 1) {
    return length * width;
}

int main() {
    int area1 = calculateArea(10, 5);
    cout << "Area with two arguments (10, 5): " << area1 << endl;

    int area2 = calculateArea(7);
    cout << "Area with one argument (7): "      << area2 << endl;

    int area3 = calculateArea();
    cout << "Area with no arguments: "          << area3 << endl;

    return 0;
}`,
        output: `Area with two arguments (10, 5): 50\nArea with one argument (7): 7\nArea with no arguments: 1`,
        explanation: [
          'int length = 1  → Maps default assignment variable to 1 / قيمة افتراضية = 1',
          'calculateArea(10, 5)  → Runs evaluation on authentic explicit numbers 10 and 5 / يستخدم 10 و 5',
          'calculateArea(7)  → Overrides first slot with 7, maps fallback 1 to trailing slots / يستخدم 7 لـ length، و 1 الافتراضية لـ width',
          'calculateArea()  → Evaluates using the standard preset configurations / يستخدم 1 و 1 الافتراضيتين',
          'Fallback variables are mapped within signatures, omitted from explicit calculation code / القيم الافتراضية في الـ Prototype مش في الـ Definition'
        ]
      }
    ]
  },

  {
    id: 'arrays',
    name: 'Arrays',
    icon: '🗂️',
    cards: [
      {
        id: 'a1',
        title: `مثال ٢ – مصفوفة الأرقام الزوجية <br><span style="font-size:0.8em; opacity:0.75; display:block; margin-top:4px;">Example 2 – Array of Even Numbers</span>`,
        tags: ['exam','basic'],
        idea: `<strong>The idea:</strong> Allocating numerical data structures containing even numbers spanning 0 to 50 via loop steps of 2. We track 25 entries since 26 distinct numbers exist.
        <hr style="border:none; border-top:1px dashed rgba(255,255,255,0.15); margin:8px 0;">
        <strong>الفكرة:</strong> نملأ مصفوفة بالأرقام الزوجية من 0 إلى 50 باستخدام for loop مع خطوة 2. المصفوفة حجمها 25 عشان في 26 رقم زوجي (0,2,4...50).`,
        hint: `const int arrSize = 25 specifies a structural constant requirement for fixed stack initialization arrays. <br><span style="display:block; margin-top:4px; opacity:0.8;">const int arrSize = 25  ← لازم const عشان حجم المصفوفة fixed عند الـ compile. لو حطيت int بدل const هيطلع Error.</span>`,
        code:
`#include <iostream>
using namespace std;

int main() {
    const int arrSize = 25;
    int num[arrSize] = {0};
    int index = 0;

    for (int i = 0; index < 25; i = i + 2) {
        num[index] = i;
        index++;
    }

    cout << "Displaying all array elements:" << endl;
    for (int i = 0; i < 25; i += 2) {
        cout << "num[" << i << "] = " << num[i] << endl;
    }

    return 0;
}`,
        output: `Displaying all array elements:\nnum[0] = 0\nnum[2] = 4\nnum[4] = 8\nnum[6] = 12\n...`,
        explanation: [
          'const int arrSize = 25  → Required specification to preserve storage allocations at compile time / ضروري لتعريف حجم المصفوفة',
          'int num[arrSize] = {0};  → Zero-initializes all members to prevent junk data / يبدأ كل العناصر بصفر',
          'index  → Standalone tracking variable mapped to monitor indexing boundaries / متغير منفصل لتعقب موضع الكتابة في المصفوفة',
          'i = i + 2  → Advances calculation sequence by binary intervals targeting evens / الـ loop بتمشي بخطوة 2 للأرقام الزوجية',
          'Allocation structures tracking 25 positions index from 0 to 24 / مصفوفة حجم 25 = عناصرها من [0] إلى [24]'
        ]
      },
      {
        id: 'a2',
        title: `مثال ٣ – Dynamic Array (حجم من المستخدم) <br><span style="font-size:0.8em; opacity:0.75; display:block; margin-top:4px;">Example 3 – Dynamic Array (Size from User)</span>`,
        tags: ['trick','exam'],
        idea: `<strong>The idea:</strong> When data tracking sizes are hidden ahead of compilation, we use <code>new</code> parameters to request volatile memory space at runtime.
        <hr style="border:none; border-top:1px dashed rgba(255,255,255,0.15); margin:8px 0;">
        <strong>الفكرة:</strong> لما لا نعرف حجم المصفوفة مسبقاً، نستخدم <code>new</code> لحجز الذاكرة ديناميكياً في وقت التنفيذ.`,
        hint: `int* arr = new int[size]; configures memory within Heap arrays. You must discard it manually via delete[] arr; <br><span style="display:block; margin-top:4px; opacity:0.8;">int* arr = new int[size];  ← يحجز مصفوفة في الـ Heap. بعد ما تخلص منها لازم تكتب delete[] arr;</span>`,
        code:
`#include <iostream>
using namespace std;

int main() {
    int size;
    cout << "Enter the size of the array: ";
    cin >> size;

    int* arr = new int[size];

    for (int i = 0; i < size; ++i) {
        cout << "Enter element " << i << ": ";
        cin >> arr[i];
    }

    cout << "--- Printing all elements ---" << endl;
    for (int i = 0; i < size; ++i) {
        cout << "Element " << i << " is: " << arr[i] << endl;
    }

    return 0;
}`,
        output: `Enter the size of the array: 5\nEnter element 0: 10\nEnter element 1: 20\nEnter element 2: 30\nEnter element 3: 40\nEnter element 4: 50\n--- Printing all elements ---\nElement 0 is: 10\nElement 1 is: 20\nElement 2 is: 30\nElement 3 is: 40\nElement 4 is: 50`,
        explanation: [
          'new int[size]  → Requests custom operational heap space matching tracking demands / يحجز ذاكرة ديناميكية في الـ Heap',
          'int*  → Declares pointer base referencing index 0 of dynamic track blocks / pointer لأول عنصر في المصفوفة',
          'arr[i]  → Structural indexing syntactically mimics standard stack configurations / الوصول للعناصر زي المصفوفة العادية',
          'delete[] arr;  → Frees volatile memory blocks to guard system paths from memory leaks / يحرر الذاكرة (ضروري لتجنب Memory Leak)'
        ]
      },
      {
        id: 'a3',
        title: `مثال ٥ – حساب المتوسط باستخدام function <br><span style="font-size:0.8em; opacity:0.75; display:block; margin-top:4px;">Example 5 – Calculating Average using a Function</span>`,
        tags: ['exam','imp'],
        idea: `<strong>The idea:</strong> Populating floating numerical containers via explicit inputs, forwarding structural references to mathematical average functions.
        <hr style="border:none; border-top:1px dashed rgba(255,255,255,0.15); margin:8px 0;">
        <strong>الفكرة:</strong> نملأ float array من المستخدم ثم نمررها لـ function تحسب المتوسط. المصفوفة بتنتقل كـ pointer تلقائياً للـ function.`,
        hint: `Arrays degrade into standard pointers when sent through parameters, making separate size metrics required. <br><span style="display:block; margin-top:4px; opacity:0.8;">لما تمرر array لـ function بتمرر pointer لأول عنصر. ولذلك لازم تمرر الحجم size كـ parameter منفصل.</span>`,
        code:
`#include <iostream>
using namespace std;

float calculateAverage(float arr[], int size) {
    float sum = 0;
    for (int i = 0; i < size; ++i) {
        sum = sum + arr[i];
    }
    return sum / size;
}

int main() {
    const int SIZE = 10;
    float numbers[SIZE];

    cout << "--- Enter 10 numbers ---" << endl;
    for (int i = 0; i < SIZE; ++i) {
        cout << "Enter number " << i + 1 << ": ";
        cin >> numbers[i];
    }

    float avg = calculateAverage(numbers, SIZE);
    cout << "The average of all numbers is: " << avg << endl;

    return 0;
}`,
        output: `--- Enter 10 numbers ---\nEnter number 1: 10\n...\nEnter number 10: 100\nThe average of all numbers is: 55`,
        explanation: [
          'float arr[]  → Signifies target variable tracking parameter mimics array mechanics / تعريف parameter كـ array',
          'int size  → Explicit tracking variable detailing internal capacity limits to subprograms / لازم تمرر الحجم لأن الـ array ما بتعرفش حجم نفسها',
          'sum / size  → Mixed float-to-integer operations calculate exact float values / قسمة float على int تعطي float',
          'numbers  → Structural array symbols fall into base pointer configurations implicitly / numbers  ← بيتمرر كـ pointer تلقائياً (بدون &)'
        ]
      },
      {
        id: 'a4',
        title: `مثال ٦ – fillArr, printArr, searchArr <br><span style="font-size:0.8em; opacity:0.75; display:block; margin-top:4px;">Example 6 – fillArr, printArr, searchArr</span>`,
        tags: ['exam','imp'],
        idea: `<strong>The idea:</strong> Segregating layout jobs across 3 routines: Initialization arrays, Logging screens, and tracking elements. Implements Separation of Concerns.
        <hr style="border:none; border-top:1px dashed rgba(255,255,255,0.15); margin:8px 0;">
        <strong>الفكرة:</strong> نقسم العمل على 3 functions: واحدة تملأ المصفوفة، واحدة تطبعها، وواحدة تبحث عن عنصر. مبدأ Separation of Concerns.`,
        hint: `Searching subprograms return negative 1 during value parsing misses, a typical Sentinel pattern. <br><span style="display:block; margin-top:4px; opacity:0.8;">searchArr تُرجع -1 لو العنصر ما اتلاقيش. ده convention شائع في C++.</span>`,
        code:
`#include <iostream>
using namespace std;

const int SIZE = 5;

void fillArr(int arr[], int maxSize) {
    cout << "--- Enter " << maxSize << " numbers ---" << endl;
    for (int i = 0; i < maxSize; ++i) {
        cout << "Enter element " << i << ": ";
        cin >> arr[i];
    }
}

void printArr(int arr[], int size) {
    cout << "--- Array Contents ---" << endl;
    for (int i = 0; i < size; ++i) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

int searchArr(int arr[], int size, int key) {
    for (int i = 0; i < size; ++i) {
        if (arr[i] == key) {
            return i;
        }
    }
    return -1;
}

int main() {
    int myArray[SIZE];
    int searchKey;

    fillArr(myArray, SIZE);
    printArr(myArray, SIZE);

    cout << "Enter a number to search for: ";
    cin >> searchKey;

    int index = searchArr(myArray, SIZE, searchKey);

    if (index != -1)
        cout << "Found " << searchKey << " at index " << index << endl;
    else
        cout << searchKey << " was not found in the array." << endl;

    return 0;
}`,
        output: `--- Enter 5 numbers ---\nEnter element 0: 2\n...\n--- Array Contents ---\n2 4 6 8 10 \nEnter a number to search for: 6\nFound 6 at index 2`,
        explanation: [
          'fillArr: Directing user inputs to populate structural index files / تملأ المصفوفة من المستخدم',
          'printArr: Logs interior data components sequentially separated by space metrics / تطبع العناصر مفصولة بمسافة',
          'searchArr: Iterates across indices returning matching locations or value -1 / بتبحث وتُرجع الـ index أو -1',
          '-1  → Standard value indicating clear tracking failures inside blocks / اتفاقية دلالة على "ما اتلاقيش" (Sentinel Value)',
          'index != -1  → Structural check evaluating whether target element searches passed / فحص لو العنصر اتلاقى'
        ]
      }
    ]
  },

  {
    id: 'structs',
    name: 'Structs',
    icon: '🏗️',
    cards: [
      {
        id: 'st1',
        title: `مثال ٣ – Struct: بيانات طالبين وحساب المتوسط <br><span style="font-size:0.8em; opacity:0.75; display:block; margin-top:4px;">Example 3 – Struct: Two Students\' Data & Average Calculation</span>`,
        tags: ['exam','imp'],
        idea: `<strong>The idea:</strong> Struct aggregates multiple heterogeneous data primitives inside a singular custom component definition. We map id (int) and grade (float).
        <hr style="border:none; border-top:1px dashed rgba(255,255,255,0.15); margin:8px 0;">
        <strong>الفكرة:</strong> Struct بيجمع بيانات مختلفة الأنواع في نوع واحد مخصص. هنا نعرف Student struct فيه id (int) و grade (float).`,
        hint: `After setting structures, initialize elements exactly like standard items: Student s1, s2; mapping parameters via dot notation: s1.id <br><span style="display:block; margin-top:4px; opacity:0.8;">بعد تعريف الـ struct، تقدر تنشئ منه objects زي أي نوع: Student s1, s2;  ثم تصل للمحتوى بالـ dot: s1.id, s1.grade</span>`,
        code:
`#include <iostream>
using namespace std;

struct Student {
    int id;
    float grade;
};

int main() {
    Student s1, s2;
    float average;

    cout << "Enter ID for student 1: ";
    cin >> s1.id;
    cout << "Enter grade for student 1: ";
    cin >> s1.grade;

    cout << "Enter ID for student 2: ";
    cin >> s2.id;
    cout << "Enter grade for student 2: ";
    cin >> s2.grade;

    average = (s1.grade + s2.grade) / 2;
    cout << "\\nAverage Grade = " << average << endl;

    return 0;
}`,
        output: `Enter ID for student 1: 77742\nEnter grade for student 1: 90\nEnter ID for student 2: 77751\nEnter grade for student 2: 85\n\nAverage Grade = 87.5`,
        explanation: [
          'struct Student { ... };  → Maps foundational custom layout blueprint structures / تعريف نوع جديد',
          'Student s1, s2;  → Declares concrete data properties tracking instance metrics / إنشاء objects من الـ struct',
          's1.id  → Navigates into internal variable maps to query specific records / الوصول لعضو id في الـ struct s1',
          'Structs consolidate detached components to reinforce modularity / الـ struct يُجمع بيانات مرتبطة ببعض في كيان واحد',
          'Nested structs: Properties inside components can reference independent secondary structures / Nested structs: ممكن يكون عضو الـ struct نفسه struct'
        ]
      },
      {
        id: 'st2',
        title: `مثال ٤ – Struct Array ديناميكي: بيانات N موظفين <br><span style="font-size:0.8em; opacity:0.75; display:block; margin-top:4px;">Example 4 – Dynamic Struct Array: N Employees\' Data</span>`,
        tags: ['exam','imp'],
        idea: `<strong>The idea:</strong> Merging custom struct wrappers within fluid runtime array layouts to hold variable capacity employee tables: <code>new Employee[n]</code>.
        <hr style="border:none; border-top:1px dashed rgba(255,255,255,0.15); margin:8px 0;">
        <strong>الفكرة:</strong> نجمع struct مع dynamic array عشان نخزن بيانات عدد غير محدد من الموظفين. نستخدم <code>new Employee[n]</code>.`,
        hint: `Employee *emp = new Employee[n]; tracks pointers across struct array records. Navigation syntax: emp[i].salary <br><span style="display:block; margin-top:4px; opacity:0.8;">Employee *emp = new Employee[n];  ← pointer لمصفوفة من الـ structs. الوصول: emp[i].id, emp[i].salary</span>`,
        code:
`#include <iostream>
using namespace std;

struct Employee {
    int id;
    float salary;
};

int main() {
    int n;
    cout << "Enter number of employees: ";
    cin >> n;

    Employee *emp = new Employee[n];

    for (int i = 0; i < n; i++) {
        cout << "\\nEnter ID for employee " << i + 1 << ": ";
        cin >> emp[i].id;
        cout << "Enter salary for employee " << i + 1 << ": ";
        cin >> emp[i].salary;
    }

    cout << "\\n--- Employee Details ---\\n";
    for (int i = 0; i < n; i++) {
        cout << "Employee " << i + 1 << endl;
        cout << "ID: "     << emp[i].id     << endl;
        cout << "Salary: " << emp[i].salary << endl << endl;
    }

    return 0;
}`,
        output: `Enter number of employees: 3\n\nEnter ID for employee 1: 77742\nEnter salary for employee 1: 5000\n...\n--- Employee Details ---\nEmployee 1\nID: 77742\nSalary: 5000`,
        explanation: [
          'new Employee[n]  → Instantiates runtime fluid tracking blocks handling custom structures / dynamic array من الـ struct',
          'emp[i].id  → Targets index tracking channels to isolate data properties / الوصول لـ id في الـ object رقم i',
          'i + 1 within logging streams shifts UI presentations into human index scales beginning at 1 / i + 1 في الـ cout  ← عشان الطباعة تبدأ من 1 مش 0',
          'delete[] emp;  → Safely purges runtime memory allocations after operation lifecycles drop / لتحرير الذاكرة (ضروري في Real Code)',
          'Weaving dynamic records alongside raw structs unlocks scalable data engineering solutions / دمج struct مع dynamic array = قوة كبيرة في تخزين البيانات'
        ]
      },
      {
        id: 'st3',
        title: `سؤال: ما هو الـ Output؟ (Nested Struct) <br><span style="font-size:0.8em; opacity:0.75; display:block; margin-top:4px;">Question: What is the Output? (Nested Struct)</span>`,
        tags: ['trick','exam'],
        idea: `<strong>The idea:</strong> Nested structs: Base item wrappers contain secondary structured elements inside their blueprint. Navigation cascades dots down: a.b.y
        <hr style="border:none; border-top:1px dashed rgba(255,255,255,0.15); margin:8px 0;">
        <strong>الفكرة:</strong> Nested structs: الـ struct A يحتوي على عضو B وهو نفسه struct. الوصول للعضو المتداخل يكون بنقطتين: a.b.y`,
        hint: `a.x = 5 flags variable x directly. a.b.y = 10 targets internal parameters nesting inside sub-component B. Summary equals 15. <br><span style="display:block; margin-top:4px; opacity:0.8;">a.x = 5  ← عضو x في A. a.b.y = 10  ← عضو y في الـ struct B المتداخل داخل A. المجموع = 15.</span>`,
        code:
`#include <iostream>
using namespace std;

struct B {
    int y;
};

struct A {
    int x;
    B b;
};

int main() {
    A a;
    a.x = 5;
    a.b.y = 10;
    cout << a.x + a.b.y;
    return 0;
}`,
        output: `15`,
        explanation: [
          'Wrapper A houses integer property x alongside explicit structure instances marked as B b / struct A يحتوي على int x وكمان B b (struct داخل struct)',
          'a.b.y  → Traverses step-wise down variables: first isolating variable wrapper b, then property y / a.b.y  ← للوصول لـ y: أولاً a.b (عضو b في a) ثم .y',
          'Calculates final mathematical equations sequentially: 5 + 10 = 15 / a.x + a.b.y = 5 + 10 = 15',
          'Nested configuration objects help unpack and structure complex business logic schemas / Nested structs شائعة في تمثيل بيانات معقدة'
        ]
      }
    ]
  }
];

// ──────────────────────────────────────────────────
//  FLASHCARDS DATA
// ──────────────────────────────────────────────────
const FLASHCARDS = [
  { ar: { q: 'ما هي أنواع البيانات الأساسية في C++؟', a: 'int, float, double, char, bool, string (مع #include<string>)' }, en: { q: 'What are the basic data types in C++?', a: 'int, float, double, char, bool, string (needs #include<string>)' } },
  { ar: { q: 'ما الفرق بين cin و cout؟', a: 'cout = طباعة للشاشة  |  cin = قراءة من المستخدم' }, en: { q: 'What is the difference between cin and cout?', a: 'cout = print to screen  |  cin = read input from user' } },
  { ar: { q: 'ماذا يفعل endl؟', a: 'ينهي السطر الحالي ويروح لسطر جديد (مثل \\n لكن أبطأ)' }, en: { q: 'What does endl do?', a: 'Ends the current line and moves to a new one (like \\n but slower)' } },
  { ar: { q: 'ما قيمة: 10 % 3؟', a: '1  (الباقي من القسمة: 10 = 3×3 + 1)' }, en: { q: 'What is the value of: 10 % 3?', a: '1  (remainder of division: 10 = 3×3 + 1)' } },
  { ar: { q: 'ما الفرق بين / للـ int وللـ float؟', a: 'int/int = ناتج صحيح بدون كسر  |  float/float = ناتج بالكسر' }, en: { q: 'What is the difference between / for int vs float?', a: 'int/int = integer result, no decimals  |  float/float = decimal result' } },
  { ar: { q: 'ما الصيغة الأساسية لـ for loop؟', a: 'for (init; condition; update) { ... }' }, en: { q: 'What is the basic syntax of a for loop?', a: 'for (init; condition; update) { ... }' } },
  { ar: { q: 'متى تستخدم switch بدل if-else if؟', a: 'لما تفحص قيمة واحدة بحالات ثابتة ومحددة (أسرع وأوضح)' }, en: { q: 'When do you use switch instead of if-else if?', a: 'When checking one value against fixed, specific cases (faster and cleaner)' } },
  { ar: { q: 'ما الفرق بين && و ||؟', a: '&& (AND): كل الشروط لازم تتحقق  |  || (OR): يكفي شرط واحد' }, en: { q: 'What is the difference between && and ||?', a: '&& (AND): ALL conditions must be true  |  || (OR): only ONE needs to be true' } },
  { ar: { q: 'ما هو الـ Ternary Operator؟', a: 'condition ? value_if_true : value_if_false  — if-else في سطر واحد' }, en: { q: 'What is the Ternary Operator?', a: 'condition ? value_if_true : value_if_false  — if-else in one line' } },
  { ar: { q: 'ما هو الـ break في switch؟', a: 'يوقف التنفيذ داخل الـ switch ويخرج منه. بدونه يستمر للـ case التالية' }, en: { q: 'What is break in a switch statement?', a: 'Stops execution inside the switch and exits it. Without it, falls through to the next case' } },
  { ar: { q: 'ما هو الـ default في switch؟', a: 'يُنفَّذ لو ما انطبقش أي case – مثل else في if-else' }, en: { q: 'What is default in a switch statement?', a: 'Runs when no case matches – like else in if-else' } },
  { ar: { q: 'ما الفرق بين void function و int function؟', a: 'void = لا تُرجع شيء  |  int = تُرجع قيمة int باستخدام return' }, en: { q: 'What is the difference between a void function and an int function?', a: 'void = returns nothing  |  int = returns an int value using return' } },
  { ar: { q: 'ما هو الـ Function Prototype؟', a: 'تعريف مسبق للـ function قبل main بدون body: int add(int, int);' }, en: { q: 'What is a Function Prototype?', a: 'A forward declaration before main without a body: int add(int, int);' } },
  { ar: { q: 'ما هو الـ Call by Reference؟', a: 'تمرير المتغير نفسه (بـ &) لا نسخة منه – أي تعديل يؤثر في الأصل' }, en: { q: 'What is Call by Reference?', a: 'Passing the variable itself (with &) not a copy – any change affects the original' } },
  { ar: { q: 'ما هو الـ Default Parameter؟', a: 'قيمة افتراضية للـ parameter لو ما مُررتش: int f(int x = 1)' }, en: { q: 'What is a Default Parameter?', a: 'A default value for a parameter if none is passed: int f(int x = 1)' } },
  { ar: { q: 'كيف نُعرف Array في C++؟', a: 'int arr[5];  أو  int arr[] = {1,2,3,4,5};' }, en: { q: 'How do you declare an Array in C++?', a: 'int arr[5];  or  int arr[] = {1,2,3,4,5};' } },
  { ar: { q: 'لماذا نحتاج const مع حجم المصفوفة؟', a: 'حجم المصفوفة لازم يُعرف وقت الـ compile، const يجعل القيمة ثابتة' }, en: { q: 'Why do we need const with array size?', a: 'Array size must be known at compile time, const makes the value fixed' } },
  { ar: { q: 'كيف ننشئ Dynamic Array؟', a: 'int* arr = new int[size];  ثم نحرر: delete[] arr;' }, en: { q: 'How do you create a Dynamic Array?', a: 'int* arr = new int[size];  then free it: delete[] arr;' } },
  { ar: { q: 'لماذا نمرر size مع الـ array للـ function؟', a: 'لأن الـ array بتنتقل كـ pointer فبتفقد معلومة الحجم' }, en: { q: 'Why pass size with an array to a function?', a: 'Because the array is passed as a pointer and loses its size information' } },
  { ar: { q: 'ما هو الـ struct؟', a: 'نوع مخصص يجمع متغيرات مختلفة الأنواع في كيان واحد' }, en: { q: 'What is a struct?', a: 'A custom type that groups variables of different types into one unit' } },
  { ar: { q: 'كيف نصل لعضو في struct؟', a: 'باستخدام نقطة: s1.id, s1.grade' }, en: { q: 'How do you access a struct member?', a: 'Using dot notation: s1.id, s1.grade' } },
  { ar: { q: 'ما ناتج: bool student = true; cout << student;', a: '1  (true يُطبع كـ 1، false يُطبع كـ 0 في C++)' }, en: { q: 'What is the output of: bool student = true; cout << student;', a: '1  (true prints as 1, false prints as 0 in C++)' } },
  { ar: { q: 'ما قيمة: int x = 10; cout << !x;', a: '0  (x = 10 وهو truthy، !truthy = 0 = false)' }, en: { q: 'What is the value of: int x = 10; cout << !x;', a: '0  (x = 10 is truthy, !truthy = 0 = false)' } },
  { ar: { q: 'ما الفرق بين * و & مع الـ pointers؟', a: '& = عنوان المتغير  |  * = الوصول للقيمة عبر العنوان (dereference)' }, en: { q: 'What is the difference between * and & with pointers?', a: '& = address of the variable  |  * = access value at that address (dereference)' } }
];

// ──────────────────────────────────────────────────
//  QUIZ DATA
// ──────────────────────────────────────────────────
const QUIZ_POOL = [
  {
    ar: { q: 'ما ناتج: int x = 10, y = 3;  cout << x % y;' },
    en: { q: 'What is the output of: int x = 10, y = 3;  cout << x % y;' },
    options: ['3', '1', '0', '3.33'],
    correct: 1,
    topic: 'Operators'
  },
  {
    ar: { q: 'ما ناتج: int x = 10, y = 3;  cout << x / y;' },
    en: { q: 'What is the output of: int x = 10, y = 3;  cout << x / y;' },
    options: ['3.33', '3', '4', '1'],
    correct: 1,
    topic: 'Operators'
  },
  {
    ar: { q: 'ما ناتج البرنامج التالي؟\nbool b = false;\ncout << !b;' },
    en: { q: 'What is the output of the following?\nbool b = false;\ncout << !b;' },
    options: ['0', 'false', '1', 'Error'],
    correct: 2,
    topic: 'Variables'
  },
  {
    ar: { q: 'أيٌّ من التالي صحيح لتعريف char؟' },
    en: { q: 'Which of the following is the correct way to declare a char?' },
    options: ['char c = "A";', 'char c = \'A\';', 'char c = A;', 'char c = 65.0;'],
    correct: 1,
    topic: 'Variables'
  },
  {
    ar: { q: 'متى يُنفَّذ default في switch؟' },
    en: { q: 'When does the default case execute in a switch statement?' },
    options_ar: ['دائماً', 'لو ما انطبقش أي case', 'لو case الأخيرة اتنفذت', 'لو break مش موجود'],
    options_en: ['Always', 'When no case matches', 'When the last case runs', 'When break is missing'],
    correct: 1,
    topic: 'Conditionals'
  },
  {
    ar: { q: 'ما ناتج: (5 > 3) && (2 > 4)?' },
    en: { q: 'What is the result of: (5 > 3) && (2 > 4)?' },
    options: ['true', 'false', '1', 'Error'],
    correct: 1,
    topic: 'Conditionals'
  },
  {
    ar: { q: 'ما الفرق الرئيسي بين Call by Value وCall by Reference؟' },
    en: { q: 'What is the main difference between Call by Value and Call by Reference?' },
    options_ar: ['Call by Value أسرع', 'Call by Reference يمرر العنوان فالتعديل يؤثر في الأصل', 'Call by Value يمرر العنوان', 'لا فرق'],
    options_en: ['Call by Value is faster', 'Call by Reference passes the address so changes affect the original', 'Call by Value passes the address', 'No difference'],
    correct: 1,
    topic: 'Functions'
  },
  {
    ar: { q: 'لماذا نمرر size مع الـ array لأي function؟' },
    en: { q: 'Why do we pass size along with an array to a function?' },
    options_ar: ['لأن الـ array كبيرة', 'لأن الـ array تُمرر كـ pointer وتفقد معلومة الحجم', 'لأن الـ compiler يطلب ذلك', 'للسرعة فقط'],
    options_en: ['Because the array is large', 'Because the array is passed as a pointer and loses its size info', 'Because the compiler requires it', 'For speed only'],
    correct: 1,
    topic: 'Arrays'
  },
  {
    ar: { q: 'ما ناتج:\nstruct A { int x; };\nA a; a.x = 7;\ncout << a.x * 2;' },
    en: { q: 'What is the output of:\nstruct A { int x; };\nA a; a.x = 7;\ncout << a.x * 2;' },
    options: ['7', '14', 'Error', '2'],
    correct: 1,
    topic: 'Structs'
  },
  {
    ar: { q: 'ما الـ Ternary Operator المكافئ لـ:\nif (x > 0) cout << "pos"; else cout << "neg";' },
    en: { q: 'Which Ternary Operator is equivalent to:\nif (x > 0) cout << "pos"; else cout << "neg";' },
    options: [
      'cout << x > 0 ? "pos" : "neg";',
      'cout << (x > 0) ? "pos" : "neg";',
      'cout << ((x > 0) ? "pos" : "neg");',
      'cout << x ? "pos" : "neg";'
    ],
    correct: 2,
    topic: 'Conditionals'
  }
];

// ──────────────────────────────────────────────────
//  STATE
// ──────────────────────────────────────────────────
let currentSection = 'dashboard';
let doneSet        = new Set(JSON.parse(localStorage.getItem('cpp_done') || '[]'));
let lastCard       = localStorage.getItem('cpp_last') || null;
let lang           = localStorage.getItem('cpp_lang') || 'ar';

let fcIndex   = 0;
let fcOrder   = [...Array(FLASHCARDS.length).keys()];
let quizState = null;

function setLang(l) {
  lang = l;
  localStorage.setItem('cpp_lang', l);
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === l);
  });
  if (currentSection === 'flashcards') renderFlashcard();
  if (currentSection === 'quiz' && quizState) renderQuizQuestion();
  else if (currentSection === 'quiz') renderQuizStart();
}

// ──────────────────────────────────────────────────
//  NAVIGATION
// ──────────────────────────────────────────────────
function navigate(sectionId) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const sec = document.getElementById('sec-' + sectionId);
  if (sec) sec.classList.add('active');

  const nav = document.querySelector(`.nav-item[data-section="${sectionId}"]`);
  if (nav) nav.classList.add('active');

  currentSection = sectionId;

  // Render section if study section
  const sData = SECTIONS.find(s => s.id === sectionId);
  if (sData) renderSection(sData);
  if (sectionId === 'flashcards') renderFlashcard();
  if (sectionId === 'quiz') renderQuizStart();

  // Close sidebar on mobile
  document.getElementById('sidebar').classList.remove('open');
  window.scrollTo(0, 0);
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

// ──────────────────────────────────────────────────
//  RENDER STUDY SECTION
// ──────────────────────────────────────────────────
function renderSection(sData) {
  const sec = document.getElementById('sec-' + sData.id);
  const total = sData.cards.length;
  const done  = sData.cards.filter(c => doneSet.has(c.id)).length;

  sec.innerHTML = `
    <div class="section-header-row">
      <div>
        <h1 class="section-title-big">${sData.icon} ${sData.name}</h1>
        <p class="section-done-count">${done} / ${total} تمت مذاكرتهم ✅</p>
      </div>
      <div class="section-actions">
        <button class="btn btn-outline btn-sm" onclick="markAllDone('${sData.id}')">✅ علّم الكل منتهي</button>
        <button class="btn btn-outline btn-sm" onclick="navigate('quiz')">📝 اختبار القسم</button>
      </div>
    </div>
    <div class="cards-list">
      ${sData.cards.map(card => buildCard(card)).join('')}
    </div>
  `;
}

function buildCard(card) {
  const done = doneSet.has(card.id);
  const tagHtml = card.tags.map(t => {
    if (t === 'exam')  return '<span class="tag tag-exam">📝 فكرة امتحان</span>';
    if (t === 'imp')   return '<span class="tag tag-imp">🔥 مهم</span>';
    if (t === 'trick') return '<span class="tag tag-trick">⚠️ تريكة</span>';
    if (t === 'basic') return '<span class="tag tag-basic">🔵 أساسي</span>';
    return '';
  }).join('');

  return `
  <div class="study-card ${done ? 'done-card' : ''}" id="card-${card.id}">
    <div class="card-top">
      <div class="card-title-row">
        <div class="card-num">// ${card.id.toUpperCase()}</div>
        <div class="card-title">${card.title}</div>
        <div class="card-tags">${tagHtml}</div>
      </div>
      <button class="card-done-btn ${done ? 'done' : ''}" id="done-btn-${card.id}"
        onclick="toggleDone('${card.id}')">
        ${done ? '✅ تمت' : '○ علّم منتهي'}
      </button>
    </div>
    <div class="card-body">
      <div class="card-idea">${card.idea}</div>

      <div class="card-actions">
        <button class="btn btn-outline btn-sm" onclick="toggleHint('${card.id}')">💡 إظهار التلميح / Hint</button>
        <button class="btn btn-outline btn-sm" onclick="toggleCode('${card.id}')">👁️ إظهار الحل / Solution</button>
        <button class="btn btn-outline btn-sm" onclick="toggleExpl('${card.id}')">📖 الشرح / Explanation</button>
      </div>

      <div class="hint-box" id="hint-${card.id}">
        💡 <strong>Hint / تلميح:</strong><br>${card.hint}
      </div>

      <div class="code-box" id="code-${card.id}">
        <div class="code-header">
          <div class="code-dot dot-r"></div>
          <div class="code-dot dot-y"></div>
          <div class="code-dot dot-g"></div>
          <span>solution.cpp</span>
        </div>
        <pre class="code-pre"><code>${hl(card.code)}</code></pre>
        ${card.output ? `<div class="output-box visible"><div class="output-label">▶ OUTPUT</div>${card.output}</div>` : ''}
      </div>

      <div class="card-explanation" id="expl-${card.id}">
        <div class="expl-title">// شرح سطر بسطر / Line-by-Line Explanation</div>
        <ul class="expl-list">
          ${card.explanation.map(e => `<li>${e}</li>`).join('')}
        </ul>
      </div>
    </div>
  </div>`;
}

function toggleHint(id) {
  const el = document.getElementById('hint-' + id);
  el.classList.toggle('visible');
}
function toggleCode(id) {
  const el = document.getElementById('code-' + id);
  el.classList.toggle('visible');
  saveLastCard(id);
}
function toggleExpl(id) {
  const el = document.getElementById('expl-' + id);
  el.classList.toggle('visible');
}

function toggleDone(id) {
  if (doneSet.has(id)) doneSet.delete(id);
  else doneSet.add(id);
  localStorage.setItem('cpp_done', JSON.stringify([...doneSet]));
  updateDashboard();

  // Update button
  const btn = document.getElementById('done-btn-' + id);
  if (btn) {
    const done = doneSet.has(id);
    btn.className = 'card-done-btn' + (done ? ' done' : '');
    btn.textContent = done ? '✅ تمت' : '○ علّم منتهي';
  }
}

function markAllDone(sectionId) {
  const sData = SECTIONS.find(s => s.id === sectionId);
  if (!sData) return;
  sData.cards.forEach(c => doneSet.add(c.id));
  localStorage.setItem('cpp_done', JSON.stringify([...doneSet]));
  renderSection(sData);
  updateDashboard();
}

function saveLastCard(cardId) {
  localStorage.setItem('cpp_last', cardId);
  lastCard = cardId;
}

// ──────────────────────────────────────────────────
//  DASHBOARD
// ──────────────────────────────────────────────────
function updateDashboard() {
  const allCards = SECTIONS.flatMap(s => s.cards);
  const total    = allCards.length;
  const done     = allCards.filter(c => doneSet.has(c.id)).length;
  const rem      = total - done;
  const pct      = total ? Math.round(done / total * 100) : 0;

  document.getElementById('stat-done').textContent      = done;
  document.getElementById('stat-remaining').textContent  = rem;
  document.getElementById('stat-total').textContent      = total;
  document.getElementById('stat-pct').textContent        = pct + '%';
  document.getElementById('progress-pct-label').textContent = pct + '%';
  document.getElementById('main-progress-bar').style.width   = pct + '%';
  document.getElementById('mini-progress-bar').style.width   = pct + '%';
  document.getElementById('mini-pct-text').textContent        = pct + '%';

  // Overview grid
  const grid = document.getElementById('overview-grid');
  if (grid) {
    grid.innerHTML = SECTIONS.map(s => {
      const t = s.cards.length;
      const d = s.cards.filter(c => doneSet.has(c.id)).length;
      const p = t ? Math.round(d / t * 100) : 0;
      return `
        <div class="overview-card" onclick="navigate('${s.id}')">
          <div class="ov-top">
            <span class="ov-name">${s.icon} ${s.name}</span>
            <span class="ov-count">${d}/${t}</span>
          </div>
          <div class="ov-bar-track"><div class="ov-bar-fill" style="width:${p}%"></div></div>
          <div class="ov-pct">${p}% مكتمل</div>
        </div>`;
    }).join('');
  }

  // Update nav badges
  document.querySelectorAll('.nav-item[data-section]').forEach(nav => {
    const id = nav.getAttribute('data-section');
    const s  = SECTIONS.find(sec => sec.id === id);
    if (s) {
      const d = s.cards.filter(c => doneSet.has(c.id)).length;
      let badge = nav.querySelector('.nav-badge');
      if (!badge) { badge = document.createElement('span'); badge.className = 'nav-badge'; nav.appendChild(badge); }
      badge.textContent = `${d}/${s.cards.length}`;
    }
  });
}

// ──────────────────────────────────────────────────
//  DASHBOARD ACTIONS
// ──────────────────────────────────────────────────
function resumeStudy() {
  if (lastCard) {
    // find which section
    for (const s of SECTIONS) {
      const c = s.cards.find(card => card.id === lastCard);
      if (c) {
        navigate(s.id);
        setTimeout(() => {
          const el = document.getElementById('card-' + c.id);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 200);
        return;
      }
    }
  }
  // else go to first unfinished
  for (const s of SECTIONS) {
    const card = s.cards.find(c => !doneSet.has(c.id));
    if (card) { navigate(s.id); return; }
  }
  navigate('variables');
}

function randomChallenge() {
  const allCards = SECTIONS.flatMap(s => s.cards);
  const notDone  = allCards.filter(c => !doneSet.has(c.id));
  const pool     = notDone.length > 0 ? notDone : allCards;
  const card     = pool[Math.floor(Math.random() * pool.length)];
  showCardModal(card);
}

function showCardModal(card) {
  const tagHtml = card.tags.map(t => {
    if (t === 'exam')  return '<span class="tag tag-exam">📝 فكرة امتحان</span>';
    if (t === 'imp')   return '<span class="tag tag-imp">🔥 مهم</span>';
    if (t === 'trick') return '<span class="tag tag-trick">⚠️ تريكة</span>';
    if (t === 'basic') return '<span class="tag tag-basic">🔵 أساسي</span>';
    return '';
  }).join('');

  document.getElementById('modal-content').innerHTML = `
    <div style="margin-bottom:1rem;">
      <div style="font-family:var(--mono);font-size:.7rem;color:var(--text3);">🎲 تحدي عشوائي / Random Challenge</div>
      <div style="font-size:1.2rem;font-weight:700;margin:.3rem 0;">${card.title}</div>
      <div style="display:flex;gap:.35rem;flex-wrap:wrap;margin-bottom:.75rem;">${tagHtml}</div>
    </div>
    <div class="card-idea">${card.idea}</div>
    <div style="display:flex;gap:.5rem;margin:1rem 0;flex-wrap:wrap;">
      <button class="btn btn-outline btn-sm" onclick="toggleHintModal()">💡 تلميح / Hint</button>
      <button class="btn btn-outline btn-sm" onclick="toggleCodeModal()">👁️ الحل / Solution</button>
    </div>
    <div class="hint-box" id="modal-hint">${card.hint}</div>
    <div class="code-box" id="modal-code">
      <div class="code-header">
        <div class="code-dot dot-r"></div><div class="code-dot dot-y"></div><div class="code-dot dot-g"></div>
        <span>solution.cpp</span>
      </div>
      <pre class="code-pre"><code>${hl(card.code)}</code></pre>
      ${card.output ? `<div class="output-box visible"><div class="output-label">▶ OUTPUT</div>${card.output}</div>` : ''}
    </div>
    <div style="margin-top:1rem;display:flex;gap:.5rem;flex-wrap:wrap;">
      <button class="btn btn-primary btn-sm" onclick="toggleDone('${card.id}');updateDashboard();">
        ${doneSet.has(card.id) ? '↩️ إلغاء / Cancel' : '✅ علّم منتهي / Done'}
      </button>
      <button class="btn btn-challenge btn-sm" onclick="closeModal();setTimeout(randomChallenge,200);">🎲 تحدي آخر / Next</button>
    </div>
  `;
  document.getElementById('modal-overlay').classList.add('open');
}

function toggleHintModal() { document.getElementById('modal-hint').classList.toggle('visible'); }
function toggleCodeModal()  { document.getElementById('modal-code').classList.toggle('visible'); }

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
}

// ──────────────────────────────────────────────────
//  FLASHCARDS
// ──────────────────────────────────────────────────
function renderFlashcard() {
  const card = FLASHCARDS[fcOrder[fcIndex]];
  const front = document.getElementById('flip-front');
  const back  = document.getElementById('flip-back');
  document.getElementById('flip-card').classList.remove('flipped');
  const q = card[lang] ? card[lang].q : card.ar.q;
  const a = card[lang] ? card[lang].a : card.ar.a;
  front.innerHTML = `
    <div class="flip-label">السؤال / Question</div>
    <div class="flip-q">${q}</div>
    <div class="flip-tap">👆 اضغط للإجابة / Tap to flip</div>
  `;
  back.innerHTML = `
    <div class="flip-label">الإجابة ✅ / Answer</div>
    <div class="flip-a">${a}</div>
  `;
  document.getElementById('fc-counter').textContent = `${fcIndex + 1} / ${FLASHCARDS.length}`;
  document.getElementById('fc-hint-area').textContent = '';
}

function flipCard() { document.getElementById('flip-card').classList.toggle('flipped'); }
function nextFlash() { fcIndex = (fcIndex + 1) % fcOrder.length; renderFlashcard(); }
function prevFlash() { fcIndex = (fcIndex - 1 + fcOrder.length) % fcOrder.length; renderFlashcard(); }

function shuffleFlash() {
  for (let i = fcOrder.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [fcOrder[i], fcOrder[j]] = [fcOrder[j], fcOrder[i]];
  }
  fcIndex = 0;
  renderFlashcard();
  document.getElementById('fc-hint-area').textContent = '🔀 تم الترتيب بشكل عشوائي!';
}

// ──────────────────────────────────────────────────
//  QUIZ
// ──────────────────────────────────────────────────
function renderQuizStart() {
  document.getElementById('quiz-container').innerHTML = `
    <div class="quiz-start">
      <div class="quiz-start-title">🎯 اختبار سريع</div>
      <p class="quiz-start-sub">سيتم اختيار 3 أسئلة عشوائية من بنك الأسئلة</p>
      <button class="btn btn-primary" onclick="startQuiz()">ابدأ الاختبار ▶</button>
    </div>
  `;
  quizState = null;
}

function startQuiz() {
  const shuffled = [...QUIZ_POOL].sort(() => Math.random() - .5);
  const questions = shuffled.slice(0, 3);
  quizState = { questions, answers: Array(3).fill(null), current: 0, submitted: false };
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const { questions, answers, current } = quizState;
  const q = questions[current];
  const isLast = current === questions.length - 1;

  const qText = (lang === 'en' && q.en) ? q.en.q : q.ar.q;
  const opts = (lang === 'en' && q.options_en) ? q.options_en : (q.options_ar || q.options);

  const optHtml = opts.map((opt, i) => {
    let cls = 'q-option';
    if (answers[current] !== null) {
      cls += ' disabled';
      if (i === q.correct)              cls += ' correct';
      else if (i === answers[current])  cls += ' wrong';
    }
    return `<div class="${cls}" onclick="selectAnswer(${i})">${opt}</div>`;
  }).join('');

  document.getElementById('quiz-container').innerHTML = `
    <div class="quiz-q">
      <div class="q-num">سؤال ${current + 1} من ${questions.length} • ${q.topic}</div>
      <div class="q-text">${qText}</div>
      <div class="q-options">${optHtml}</div>
    </div>
    <div class="quiz-nav">
      ${answers[current] !== null && !isLast
        ? `<button class="btn btn-primary" onclick="nextQuestion()">التالي ▶</button>`
        : ''}
      ${answers[current] !== null && isLast
        ? `<button class="btn btn-primary" onclick="showResults()">عرض النتيجة 🏆</button>`
        : ''}
    </div>
  `;
}

function selectAnswer(idx) {
  if (quizState.answers[quizState.current] !== null) return;
  quizState.answers[quizState.current] = idx;
  renderQuizQuestion();
}

// ──────────────────────────────────────────────────
//  INIT
// ──────────────────────────────────────────────────
function init() {
  updateDashboard();
  navigate('dashboard');
  // sync lang buttons
  setTimeout(() => {
    document.querySelectorAll('.lang-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
  }, 100);
}

init();
