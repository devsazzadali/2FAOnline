
        const input = document.getElementById("secret");
        const codeDisplay = document.getElementById("code");

        const authenticator = otplib.authenticator;

        function updateCode(){
            const secret = input.value.trim();

            if(secret.length > 0){
                try {
                    const token = authenticator.generate(secret);
                    codeDisplay.textContent = token;
                }catch (err) {
                    codeDisplay.textContent = "Invalid";
                }
            } else {
                codeDisplay.textContent = "_ _ _ _ _ _"
            }
        }


        setInterval(updateCode, 1000);
        input.addEventListener("input", updateCode);



        // --- Copy Button

        const copyBtn = document.getElementById("copy-btn");

        copyBtn.addEventListener("click", ()=>{
            const code = codeDisplay.textContent;
            if(code && code !== "_ _ _ _ _ _" && code !== "Invalid") {
                navigator.clipboard.writeText(code)
                .then(()=> alert("Code copied"))
                .catch(()=> alert("Failed to copy"))
            }
        });


        // Dark Mode

        const darkMOdeBtn = document.getElementById("dark-mode-toggle");
        darkMOdeBtn.addEventListener("click", ()=>{
            document.body.classList.toggle("dark-mode");
        });
