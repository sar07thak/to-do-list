# to-do-list
ul li::before{
    content: "";
    border: 1px solid white;
    border-radius: 50%;
    height: 16px;
    width: 16px;
    position: absolute;
    left: 20px;
    top: 18px;
    background-color: orange;
}

ul li{
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    position: relative;
   /* text-decoration-thickness: 0.4rem; */
    font-size: 17px;
    border-radius: 100px;
    padding: 10px 8px 10px 50px;
    cursor: pointer;
    box-shadow: 2px 2px 10px  black;;
}
li span{
    position: absolute;
    width: 24px;
    right: 10px;
    top: 7px;
    height: 30px;
    padding: 0px 15px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    border-radius: 100%;
    /* text-decoration: line-through; */
}
