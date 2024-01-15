from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import pandas as pd
import random as rand
import json

class GetRecommendationsAPIView(APIView):
    def post(self, request, *args, **kwargs):
        if request.method == 'POST':
            try:
                request_json = request.data
                ass_score = request_json["score"]
                ass_name = request_json["courseName"]
                stu_id = request_json["userId"]
                req_id = request_json["requestId"]
                asse_id = request_json["courseId"]
            except KeyError as e:
                # Handle the case where a required key is missing in the JSON data
                error_message = f"KeyError: '{e.args[0]}' is missing in the JSON data"
                return Response({"error": error_message}, status=status.HTTP_400_BAD_REQUEST)

            df1 = pd.read_csv("sheet_1.csv")
            df2 = pd.read_csv("sheet_3.csv")

            cate_assese = df1[(df1['from'] <= ass_score) & (df1['to'] >= ass_score)][['category', 'assesment_type']]
            category = cate_assese['category'].values[0]
            ass_type = cate_assese['assesment_type'].values[0]
            prodt_id = df2[(df2['category'] == category) & (df2['assesment_type'] == ass_type) & (
                        df2['assesment_name'] == ass_name)][['product_id', 'product_name']]
            product_dict = dict(zip(prodt_id.product_id, prodt_id.product_name))
            final_list = []
            lis = product_dict.keys()
            program_id = self.wheel(list(lis))
            for i in program_id:
                new = product_dict[i]
                data = {"programId": i, "programName": new}
                final_list.append(data)
            send_asses = {"userId": stu_id, "courseId": asse_id, "courseName": ass_name,
                        "assessmentType": ass_type, "category": category, "requestId": req_id,
                        "recommended_programs": final_list}
            return Response(send_asses, status=status.HTTP_200_OK)

    def roul_wheel(self, wheel_array):
        arrsize = len(wheel_array)
        roulette_wheel = []
        l2 = [i for i in range(0, arrsize)]
        a = sorted(l2, key=lambda *args: rand.random())
        for i in a:
            wheel_alloc = wheel_array[i]
            roulette_wheel.append(wheel_alloc)
        return roulette_wheel

    def spin(self, rw):
        count = len(rw)
        randno = rand.randint(0, 1000)
        rot_degree = randno % 360
        rot_unit = 360 / count
        rol_no = (rot_degree - (rot_degree % (rot_unit))) / rot_unit
        rol_value = rw[int(rol_no)]
        return rol_value

    def wheel(self, input_wheel):
        stop = len(input_wheel)
        start = (stop * 100) // 100
        wheel_vector = input_wheel
        roulette_wheel = self.roul_wheel(wheel_vector)
        rounds = rand.randint(start, stop)
        results = []
        i = 0
        while i < rounds:
            value = self.spin(roulette_wheel)
            results.append(value)
            i += 1
        l3 = list(set(results))[0:5]
        return l3
