package com.hello;
import static spark.Spark.*;
import org.json.JSONObject;

public class Semestral 
{
    public static void main(String[] args) 
        {
         options("/*",
        (request, response) -> {

            String accessControlRequestHeaders = request
                    .headers("Access-Control-Request-Headers");
            if (accessControlRequestHeaders != null) {
                response.header("Access-Control-Allow-Headers",
                        accessControlRequestHeaders);
            }

            String accessControlRequestMethod = request
                    .headers("Access-Control-Request-Method");
            if (accessControlRequestMethod != null) {
                response.header("Access-Control-Allow-Methods",
                        accessControlRequestMethod);
            }

            return "OK";
        });

before((request, response) -> response.header("Access-Control-Allow-Origin", "*"));

            Piramides objPiramides= new Piramides();
         

            //Devuelve algo en la pagina web
            get("/Semestral",(req,res)->{
                res.type("application/json");
                JSONObject jsonobj = new JSONObject(objPiramides);
               return jsonobj;
            });

            get("/Semestral/:id",(req,res)->{
                res.type("application/json");
                JSONObject jsonobj = new JSONObject(objPiramides.getPiramides().get(Integer.parseInt(req.params(":id"))-1));
               return jsonobj;
            });

            post("/Semestral",(req,res)->{
                res.type("application/json");
                Piramide piramide = new Piramide();
                JSONObject body = new JSONObject(req.body());
                piramide.setId(objPiramides.piramides.size()+1);
                piramide.setName(body.getString("name"));
                piramide.setPiramide(body.getString("piramide"));
                objPiramides.addPiramide(piramide);
                JSONObject jsonobj= new JSONObject(objPiramides);
               return jsonobj;
            });
        }
       
}
